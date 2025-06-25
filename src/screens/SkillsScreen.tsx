import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyPic from '../components/MyPic';
import StarRating from '../components/StarRating';
import { globalStyles } from '../styles/globalStyles';
import { skillsData, groupSkillsByCategory } from '../data/skills';

export default function SkillsScreen() {
  const groupedSkills = groupSkillsByCategory(skillsData);

  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <MyPic name="Roberto Pavusa Junior" title="Researcher and Developer" />
        
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <View key={category} style={globalStyles.section}>
            <Text style={globalStyles.sectionTitle}>{category}</Text>
            
            {skills.map((skill, index) => (
              <View key={index} style={globalStyles.skillItem}>
                <Text style={globalStyles.skillName}>{skill.name}</Text>
                <StarRating rating={skill.rating} />
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}