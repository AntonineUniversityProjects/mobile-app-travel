import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { getNotificationInbox,getUnreadNotificationInboxCount  } from 'native-notify';

const NotificationScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [unreadNotificationCount, setUnreadNotificationCount] = useState(0);
  useEffect(async () => {
    let unreadCount = await getUnreadNotificationInboxCount(16726, 'tXj9QBdb7I44T6Oqs5YZQV');
    console.log("unreadCount: ", unreadCount);
    setUnreadNotificationCount(unreadCount);
});
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        let notifications = await getNotificationInbox(16726, 'tXj9QBdb7I44T6Oqs5YZQV');
        setData(notifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false); // Set loading to false whether the request succeeds or fails
      }
    };

    fetchNotifications();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to the Notification Screen!</Text>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#E99265" />
          <Text>Loading notifications...</Text>
        </View>
      ) : (
        <View style={styles.notificationsContainer}>
          <Text style={styles.notificationsTitle}>Notifications:</Text>
          {data.map((notification, index) => (
            <View key={index} style={styles.notificationItem}>
              <Text style={styles.notificationTitle}>Title: {notification.title}</Text>
              <Text style={styles.notificationBody}>Body: {notification.body}</Text>
              

            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notificationsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  notificationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notificationItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 10,
    borderRadius: 5,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationBody: {
    fontSize: 14,
    color: '#555',
  },
  notificationText: {
    fontSize: 14,
    color: '#777',
  },
});

export default NotificationScreen;
