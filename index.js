import React from 'react';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNForm } from './form/entry';

const App = () => {
    return <View style={styles.screen}>
        <RNForm form={formData} onSubmit={handleSubmit} isLoading={isLoading} />
    </View>
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default App;
