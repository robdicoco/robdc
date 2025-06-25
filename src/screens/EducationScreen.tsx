import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyPic from '../components/MyPic';
import { globalStyles } from '../styles/globalStyles';
import { educationData, certificationsData } from '../data/education';

export default function EducationScreen() {
  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <MyPic name="Roberto Pavusa Junior" title="Researcher and Developer" />
        
        <View style={globalStyles.section}>
          <Text style={globalStyles.sectionTitle}>Education</Text>
          
          {educationData.map((education, index) => (
            <View key={index} style={globalStyles.experienceItem}>
              <Text style={globalStyles.experienceTitle}>{education.degree}</Text>
              <Text style={globalStyles.experienceCompany}>{education.institution}</Text>
              <Text style={globalStyles.experienceDate}>{education.date}</Text>
              {education.description && (
                <Text style={globalStyles.experienceDescription}>
                  {education.description}
                </Text>
              )}
            </View>
          ))}
        </View>

        <View style={globalStyles.section}>
          <Text style={globalStyles.sectionTitle}>Certifications</Text>
          
          {certificationsData.map((certification, index) => (
            <View key={index} style={globalStyles.experienceItem}>
              <Text style={globalStyles.experienceTitle}>{certification.degree}</Text>
              <Text style={globalStyles.experienceCompany}>{certification.institution}</Text>
              <Text style={globalStyles.experienceDate}>{certification.date}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
} 