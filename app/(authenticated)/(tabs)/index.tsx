import { Link } from 'expo-router';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BodyMassIndexBanner from '~/components/BodyMassIndexBanner';
import Notification from '~/components/svg/notification';
import { COLORS } from '~/constants/Colors';
import { calculateLineHeight } from '~/utils/helper';

const HAS_NO_READ_NOTIFICATIONS = true; // From backend check if user has unread notifications

export default function HomeScreen() {
  const { top, left, right } = useSafeAreaInsets();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingTop: top + 40,
        paddingLeft: left + 30,
        paddingRight: right + 30,
        rowGap: 30,
      }}>
      <View style={styles.headerContainer}>
        <View style={styles.welcomeBackAndNameContainer}>
          <Text style={styles.welcomeBackText}>Welcome back,</Text>
          <Text style={styles.nameText} numberOfLines={1}>
            Stefani Wong
          </Text>
        </View>
        <Link href="/notifications" asChild>
          <TouchableOpacity style={styles.notificationButton}>
            <Notification color={COLORS.black} width={13.87} height={16.13} />
            {HAS_NO_READ_NOTIFICATIONS && <View style={styles.badgeUnread} />}
          </TouchableOpacity>
        </Link>
      </View>
      <BodyMassIndexBanner />
      <View
        style={{
          width: '100%',
          height: 200,
          backgroundColor: 'green',
        }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 53,
  },
  welcomeBackAndNameContainer: {
    flex: 1,
    flexDirection: 'column',
    rowGap: 5,
  },
  welcomeBackText: {
    color: COLORS.gray1,
    fontSize: 12,
    lineHeight: calculateLineHeight(12),
    fontFamily: 'Poppins_400Regular',
    fontWeight: '400',
  },
  nameText: {
    color: COLORS.black,
    fontSize: 20,
    lineHeight: calculateLineHeight(20),
    fontFamily: 'Poppins_700Bold',
    fontWeight: '700',
  },
  notificationButton: {
    backgroundColor: COLORS.border,
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  badgeUnread: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: COLORS.danger,
    borderWidth: 2,
    borderColor: COLORS.border,
    position: 'absolute',
    top: 12,
    right: 15,
  },
});
