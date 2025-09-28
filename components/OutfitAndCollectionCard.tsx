import { View, Image, StyleSheet } from 'react-native';
import { Item } from '../utils/constants';

export default function OutfitAndCollectionCard({
  outfit,
  itemsMap,
  index = 0,
  style,
}: {
  outfit: any;
  itemsMap: Record<string, Item>;
  index?: number;
  style?: any;
}) {
  const imgs = outfit.items
    .map((id: string) => itemsMap[id]?.image)
    .filter(Boolean);
  return (
    <View style={[styles.outfitCard, style]}>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <View style={{ flex: 1 }}>
          <Image source={{ uri: imgs[0] }} style={styles.outfitLarge} />
        </View>
        <View style={{ width: 80, justifyContent: 'space-between' }}>
          {imgs.slice(1).map((uri: string, i: number) => (
            <Image key={i} source={{ uri }} style={styles.outfitSmall} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outfitCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  outfitLarge: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    resizeMode: 'cover',
    backgroundColor: '#eee',
  },
  outfitSmall: {
    width: 80,
    height: 86,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: '#eee',
  },
});
