
import { useState } from '#app'

type Props = {
    initValue: number,
    stepValue: number
}

export default function useCounterStore(name: string = 'counter', options: Props = { initValue: 0, stepValue: 1 }) {

    const counter = useState<number>(name)
    if (!counter.value) counter.value = options.initValue

    function increment() {
        counter.value += options.stepValue
    }

    function decrement() {
        counter.value -= options.stepValue
    }

    return {
        counter,
        increment,
        decrement
    }
}