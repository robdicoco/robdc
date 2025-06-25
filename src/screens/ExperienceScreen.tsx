import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyPic from '../components/MyPic';
import { globalStyles } from '../styles/globalStyles';
import { experienceData } from '../data/experience';

export default function ExperienceScreen() {
  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <MyPic name="Roberto Pavusa Junior" title="Researcher and Developer" />
        
        <View style={globalStyles.section}>
          <Text style={globalStyles.sectionTitle}>Professional Experience</Text>
          
          {experienceData.map((experience, index) => (
            <View key={index} style={globalStyles.experienceItem}>
              <Text style={globalStyles.experienceTitle}>{experience.title}</Text>
              <Text style={globalStyles.experienceCompany}>{experience.company}</Text>
              <Text style={globalStyles.experienceDate}>{experience.date}</Text>
              <Text style={globalStyles.experienceDescription}>
                {experience.description}
              </Text>
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 14, color: '#666666', marginBottom: 5 }}>
                  Technologies: {experience.technologies.join(', ')}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}