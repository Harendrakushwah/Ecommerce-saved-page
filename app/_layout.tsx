import { useMemo, useRef, useState, useEffect } from 'react';
import {
  Animated,
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {Item} from '../utils/constants'
import {MOCK_ITEMS, OUTFITS, ALL_FILTERS, STYLE_ICONS} from '../utils/constants';
import OutfitAndCollectionCard from '../components/OutfitAndCollectionCard'
import ItemGrid from '../components/ItemCard'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

const scale = (size: number) => (SCREEN_WIDTH / BASE_WIDTH) * size;
const verticalScale = (size: number) => (SCREEN_HEIGHT / BASE_HEIGHT) * size;

export default function App() {
  const [tab, setTab] = useState<'Collections' | 'Outfits' | 'Items'>('Items');
  const [activeFilters, setActiveFilters] = useState<
    Record<string, Set<string>>
  >({
    Style: new Set(),
    Color: new Set(),
  });
  const [query, setQuery] = useState('');
  const entranceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(entranceAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);

  const filteredItems = useMemo(() => {
    let arr = MOCK_ITEMS.slice();
    // Query filter
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter((i) => i.title.toLowerCase().includes(q));
    }
    // Active filters
    Object.keys(activeFilters).forEach((k) => {
      const set = activeFilters[k];
      if (set && set.size > 0) {
        arr = arr.filter((i) =>
          Array.from(set).some((s) =>
            i[k.toLowerCase() as keyof Item]?.toString().includes(s)
          )
        );
      }
    });
    return arr;
  }, [query, activeFilters]);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.headerRow}>
        <Text style={styles.title}>Saved</Text>
      </View>

      <Tabs tab={tab} setTab={setTab} />

      <View style={{ paddingHorizontal: 18 }}>
        <FilterChips
          tab={tab}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
      </View>

      {tab == 'Items' && (
        <View style={{ paddingHorizontal: 16, marginTop: 8 }}>
          <TextInput
            placeholder="Search Products ..."
            value={query}
            onChangeText={setQuery}
            style={styles.search}
            placeholderTextColor="#999999"
          />
        </View>
      )}

      <View style={{ flex: 1, marginTop: 12 }}>
        {tab === 'Items' && (
          <ItemGrid items={filteredItems} entranceAnim={entranceAnim} />
        )}

        {tab === 'Outfits' && (
          <ScrollView
            style={{ marginHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}>
            {OUTFITS.map((o, idx) => (
              <OutfitAndCollectionCard
                key={o.id}
                outfit={o}
                itemsMap={MOCK_ITEMS.reduce(
                  (acc, i) => ((acc[i.id] = i), acc),
                  {} as Record<string, Item>
                )}
                style={{ marginTop: 5 }}
              />
            ))}
          </ScrollView>
        )}

        {tab === 'Collections' && (
          <ScrollView
            style={{ marginHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}>
            {OUTFITS.map((o, idx) => (
              <OutfitAndCollectionCard
                key={o.id}
                outfit={o}
                itemsMap={MOCK_ITEMS.reduce(
                  (acc, i) => ((acc[i.id] = i), acc),
                  {} as Record<string, Item>
                )}
                style={{ marginTop: 5 }}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

function Tabs({ tab, setTab }: { tab: string; setTab: (t: any) => void }) {
  const tabs = ['Collections', 'Outfits', 'Items'];
  return (
    <View style={styles.tabRow}>
      {tabs.map((t) => (
        <Pressable
          key={t}
          onPress={() => setTab(t)}
          style={({ pressed }) => [
            styles.tab,
            tab === t && styles.tabActive,
            pressed && { opacity: 0.7 },
          ]}>
          <Text style={[styles.tabText, tab === t && { fontWeight: '700' }]}>
            {t}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

function FilterChips({
  tab,
  activeFilters,
  setActiveFilters,
}: {
  tab: string;
  activeFilters: Record<string, Set<string>>;
  setActiveFilters: any;
}) {
  const onToggle = (group: string, value: string) => {
    setActiveFilters((prev: Record<string, Set<string>>) => {
      const copy: Record<string, Set<string>> = {
        Style: new Set(prev.Style),
        Color: new Set(prev.Color),
      };
      if (copy[group].has(value)) copy[group].delete(value);
      else copy[group].add(value);
      return copy;
    });
  };

  // Decide which filters to show
  let filtersToRender: [string, string[]][] = [];
  if (tab === 'Collections') {
    filtersToRender = [['Style', ALL_FILTERS.Style]];
  } else if (tab === 'Items') {
    filtersToRender = [['Color', ALL_FILTERS.Color]];
  } else {
    return null; // no chips for Outfits
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 6 }}>
      {filtersToRender.map(([group, values]) => (
        <View key={group} style={{ marginRight: 12, alignItems: 'flex-start' }}>
          <Text style={{ fontSize: 12, color: '#666', marginBottom: 6 }}></Text>
          <View style={{ flexDirection: 'row', flexWrap: 'nowrap' }}>
            {values.map((v) => {
              const active = activeFilters[group].has(v);
              return (
                <Pressable
                  key={v}
                  onPress={() => onToggle(group, v)}
                  accessibilityRole="button"
                  style={({ pressed }) => [
                    styles.chip,
                    active && styles.chipActive,
                    pressed && { transform: [{ scale: 0.98 }], opacity: 0.9 },
                  ]}>
                  {group === 'Style' && STYLE_ICONS[v] ? (
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <MaterialIcons
                        name={STYLE_ICONS[v]}
                        size={14}
                        color={active ? '#4A2F19' : '#7A6E65'}
                        style={{ marginRight: 4 }}
                      />
                      <Text
                        style={[
                          styles.chipText,
                          active && { color: '#4A2F19', fontWeight: '700' },
                        ]}>
                        {v}
                      </Text>
                    </View>
                  ) : (
                    <Text
                      style={[
                        styles.chipText,
                        active && { color: '#4A2F19', fontWeight: '700' },
                      ]}>
                      {v}
                    </Text>
                  )}
                </Pressable>
              );
            })}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FBF8F6' },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 14,
    marginBottom: 10
  },
  title: { fontSize: 25, fontWeight: '700', color: '#231815' },
  tabRow: {
    width: '90%',
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FBCEB1',
    alignSelf: 'center',
    borderRadius: 20,
  },
  tab: {
    flex: 1,
    marginVertical: 3,
    paddingVertical: 8,
    borderRadius: 999,
  },
  tabActive: {
    backgroundColor: 'white',
    borderColor: '#FBCEB1',
    borderWidth: 0.1,
  },
  tabText: { fontSize: 14, color: '#4A4A4A', alignSelf: 'center' },
  search: {
    backgroundColor: '#fff',
    padding: scale(10),
    borderRadius: scale(12),
    marginTop: verticalScale(4),
    borderWidth: 1,
    borderColor: '#eee',
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F0E6E0',
    marginRight: 8,
    justifyContent: 'center',
  },
  chipText: { fontSize: 13, color: '#7A6E65' },
  chipActive: { backgroundColor: '#FFEFD9', borderColor: '#FFD8A8' },
});
