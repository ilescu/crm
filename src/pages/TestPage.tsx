import React from 'react';
import Button from "@/pages/test/Button";

const TestPage = () => {

    const [count1, setCount1] = React.useState(0)
    const [count2, setCount2] = React.useState(0)


    const getRender = {
         countOne: () => {
            setCount1(count1 + 1)
        },
        countTwo: () => {
            setCount2(count2 + 1)
        }
    }
    const numbers = [
        {id: 1, name: 'Test', value: true},
        {id: 2, name: 'Test', value: true},
        {id: 3, name: 'Anatolii', value: true},
        {id: 4, name: 'Test', value: true},
    ] as any


    const total = numbers.reduce((acc: any, item: any) => {
        return !item.value
            ? [...acc, {...item, name: 'Test', value: true}]
            : [...acc, item]
    }, [])

    total.map((i:any) => console.log(i))

    return (
        <>
            <h1 className="text-center text-blue-500"><ul>
                <li>count1: {count1}</li>
                <li>count2: {count2}</li>
            </ul></h1>
            <div className="mt-5 flex justify-center">
                <Button onClick={getRender.countOne} />
                <Button onClick={getRender.countTwo} />
            </div>
        </>
    );
};

export default TestPage;