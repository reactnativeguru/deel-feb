import React from 'react';
import { DownloadMediaProps } from '@/interfaces/DownloadMedia';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { downloadFileFromUri, openDownloadedFile } from 'expo-downloads-manager';

const DownloadMedia = ({ url, fileName }: DownloadMediaProps) => {
    const downloadFile = async () => {
        try {
            const date = new Date();
            const fileExt = url.split('.').pop();
            const originalFileName = fileName.split('.');
            const filename = `${originalFileName[0]}_${date.getTime()}.${fileExt}`;
            const { status, error } = await downloadFileFromUri(
                url,
                filename,
            );
            if (status === 'finished') {
                await openDownloadedFile(filename)
                Alert.alert('Download Complete');
            }
            else {
                throw error;
            }
        } catch (error) {
            console.error('Error downloading file:', error);
            Alert.alert('Download Failed', 'Unable to download the file. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={downloadFile}>
                <Text style={styles.buttonText}>Download File</Text>
                
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 15,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default DownloadMedia;
