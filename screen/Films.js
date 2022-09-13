import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Header } from "../components/Header";
import axios from "axios";
import { FilmItems } from "../components/FilmItems";

export const Films = () => {

    const [films, setFilms] = useState([])

    useEffect(() => {
        const getFilms = async () => {
            const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=ccf5d764c3c572ee2249ae1e24c45ff3&language=en-US&page=1')
            setFilms(res.data.results)
            console.log(res.data.results[0].title);
        }
        getFilms()
    }, [])

    return (
        <View>
            <Header />
            <FlatList 
            columnWrapperStyle = {{flex:1, justifyContent: 'space-around'}}
            numColumns = {3}
            contentContainerStyle ={{paddingBottom: 100}}
                data={films}
                keyExtractor = {item => item.id}
                renderItem={({item}) => (
                    <FilmItems 
                        film = {item}
                    />
                )}
            />
        </View>
    )
}