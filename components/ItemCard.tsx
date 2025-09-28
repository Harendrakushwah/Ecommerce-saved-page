import {useRef, useEffect} from 'react';
import {View, Text, FlatList, Animated, Pressable, Image, StyleSheet, Dimensions} from 'react-native';
import {Item} from '../utils/constants'
import { MaterialIcons } from '@expo/vector-icons';
import {STYLE_ICONS} from '../utils/constants'

const {width: SCREEN_WIDTH} = Dimensions.get('window');

function AnimatedCard({
  item,
  index,
  entrance,
}: {
  item: Item;
  index: number;
  entrance: Animated.Value;
}) {
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(anim, {
      toValue: 1,
      friction: 8,
      useNativeDriver: true,
      delay: index * 60,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        width: (SCREEN_WIDTH - 64) / 2,
        marginBottom: 18,
        transform: [
          {
            translateY: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [12, 0],
            }),
          },
        ],
        opacity: anim,
      }}>
      <Pressable style={styles.card} android_ripple={{ color: '#eee' }}>
        <Image source={{ uri: item.image }} style={styles.fullCardImage} />

        <View style={styles.overlaySaved}>
          <MaterialIcons name="bookmark" size={22} color="#6e6e6e" />
        </View>

        <View style={styles.overlayChips}>
          <View style={styles.smallChip}>
            <MaterialIcons
              name={STYLE_ICONS[item.style] || 'style'}
              size={14}
              color="#7A6E65"
            />
          </View>
          <View style={{ ...styles.smallChip, marginLeft: 5 }}>
            <Text style={styles.smallChipText}>{item.color}</Text>
          </View>
        </View>
      </Pressable>

      <View style={{ alignSelf: 'center' }}>
        <Text numberOfLines={2} style={styles.cardTitle}>
          {item.title}
        </Text>
      </View>
    </Animated.View>
  );
}

export default function ItemGrid({
  items,
  entranceAnim,
}: {
  items: Item[];
  entranceAnim: Animated.Value;
}) {
  const renderItem = ({ item, index }: { item: Item; index: number }) => (
    <AnimatedCard item={item} index={index} entrance={entranceAnim} />
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        paddingHorizontal: 16,
      }}
      contentContainerStyle={{ paddingVertical: 12, paddingBottom: 120 }}
      renderItem={renderItem}
      ListEmptyComponent={() => (
        <View style={{ padding: 32, alignItems: 'center' }}>
          <Text style={{ color: '#999' }}>No items match your filters</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    height: 200, // scaled height
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
  fullCardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  smallChip: {
    backgroundColor: '#FFF7F1',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  smallChipText: { fontSize: 12, color: '#7A6E65' },
  overlaySaved: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  overlayChips: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    flexDirection: 'row',
  },
})