import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export const FilmItems = ({film}) => {
console.log(film.poster_path);

    return (
        <TouchableOpacity 
            style = {styles.filmItem}
        >
            <Image 
                source={{usi: `https://api.themoviedb.org/3/movie/{278}/images?api_key=ccf5d764c3c572ee2249ae1e24c45ff3&language=en-US`}}
                style = {styles.img}
            />        
            <Text>
                {film.title}
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    filmItem: {
        width: '30%',
        alignItems: 'center',
        margin: 15
    },
    img: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
})