import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyPic from '../components/MyPic';
import { globalStyles } from '../styles/globalStyles';
import { linktreeData } from '../data/links';

export default function HomeScreen({ navigation }: any) {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch(err => console.error('Error opening URL:', err));
  };

  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <MyPic name="Roberto Pavusa Junior" title="Researcher and Developer" />
        
        <View style={globalStyles.section}>
          <Text style={globalStyles.sectionTitle}>Connect With Me</Text>
          
          {linktreeData.map((link, index) => (
            <TouchableOpacity
              key={index}
              style={globalStyles.linkItem}
              onPress={() => handleLinkPress(link.url)}
            >
              <Text style={globalStyles.linkText}>
                {link.icon} {link.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={globalStyles.section}>
          <Text style={globalStyles.sectionTitle}>About Me</Text>
          <Text style={{ fontSize: 16, color: '#555555', lineHeight: 24 }}>
            With over 15 years of experience in technology-driven environments, I bring a unique blend of technical expertise and client-centric strategic thinking to elevate customer success. My career spans roles in systems development, project management, and consulting, with a focus on aligning technical solutions with business objectives.
          </Text>
          <Text style={{ fontSize: 16, color: '#555555', lineHeight: 24, marginTop: 15 }}>
            Specialized in payment systems & compliance, full-lifecycle client engagement, and technical & strategic advisory. Expert in blockchain technology, industrial automation, and full-stack development with Rust, Python, and Node.js.
          </Text>
        </View>

        <View style={globalStyles.section}>
          <Text style={globalStyles.sectionTitle}>Key Expertise</Text>
          <Text style={{ fontSize: 16, color: '#555555', lineHeight: 24 }}>
            • Payment Systems & PCI Compliance{'\n'}
            • Blockchain & Smart Contracts{'\n'}
            • Industrial Automation (PLC/SCADA){'\n'}
            • Full-Stack Development{'\n'}
            • C-level Communication{'\n'}
            • Strategic Project Management
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}