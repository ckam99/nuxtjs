
import { useState } from '#app'

type Props = {
    initValue: number,
    stepValue: number
}

export default function useCounter(options: Props = { initValue: 0, stepValue: 1 }) {
    const counter = useState<number>('counter', () => options.initValue)
    // const counter = ref<number>(options.initValue)

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