import React, {useEffect, useState} from 'react';
// import styled from 'styled-components';
import { DiaryListAPI } from '../../../api/diary/diary';
import ListDataStyle from './ListDataStyle';

function ListData() {
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchListBox = async () => {
            try{
                setError(null);
                setLoading(true);

                const result = (await DiaryListAPI()).data
                console.log(result)
                setLists(result)
            } catch (error) {
                setError(error)
            }
            setLoading(false);
        };
        fetchListBox();
    }, []);

    if (loading) return (<p>로딩 중이지롱</p>);
    if (error) return (<p>에러지롱</p>)
    return (
        <ListData>
            <ListDataStyle />
        </ListData>
    )
}

export default ListData
