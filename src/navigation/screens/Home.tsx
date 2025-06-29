import React, { useEffect, useState } from 'react'
import { FlatList, SectionList } from 'react-native'
import TaskItem from '../../components/content/TaskItem';
import { useAppSelector } from '../../../hooks/useApp';
import { useTask } from '../../../hooks/useTask';
import { Button } from '../../components/ui/Button';

const Home = () => {
    const task = useAppSelector((state) => state.task)
    const { getTask } = useTask()

    const [get, setGet] = useState<{}[] | undefined | any>()
    useEffect(() => {
        (async () => {
            const get = await getTask()
            setGet(get)
        })()
    }, [setGet, get])
    const convertedData = Object.keys(task).map((e) => (
        {
            title: e,
            isOpen: false,
            data: task
        }))
    const [data, setData] = useState(convertedData)
    const setOpen = (title: string) => {
        setData(
            data.map((e) => (
                {
                    ...e,
                    isOpen: e.title === title ? !e.isOpen : false,
                }
            )))
    }


    return (
        <>
            {/* <SectionList
                sections={task}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            /> */}
            <FlatList
                className='pt-8'
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ justifyContent: "space-between" }}
                data={data}
                renderItem={({ item }) =>
                    <TaskItem
                        title={item.title}
                        key={item.title}
                        isOpen={item.isOpen}
                        data={get}
                        setOpen={setOpen}
                    />
                }
            />
        </>
    )
}

export default Home