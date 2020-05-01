import React from 'react'
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const time_Complexity = () => {
    return (
        <div className="bg-green-300">
            <h1 className=" bg-gray-200 mb-5 rounded-lg text-center text-gray-700 mx-auto max-w-4xl font-bolt text-5xl">Merge Sort Time Complexity</h1>
            <div className="bg-green-200 rounded-lg max-w-3xl mx-auto py-5">
                <BlockMath>
                    T(n)=T(n/2) +T(n/2) +n
                </BlockMath>
                <BlockMath>
                    T(n)=2T(n/2) + n
                </BlockMath>
                <BlockMath>
                    T(n/2)=2T(n/4) + n/2
                </BlockMath>
                <BlockMath>
                    T(n)=2(2T(n/4) + n/2) + n
                </BlockMath>
                <BlockMath>
                    T(n)=2^2 (n/2^2) + 2n
                </BlockMath>
                <BlockMath>
                    T(n/4)= 2T(n/8) + n/4 
                </BlockMath>
                <BlockMath>
                    T(n)= 2^2(2T(n/8) + n/4) + 2n 
                </BlockMath>
                <BlockMath>
                    T(n)= 2^3T(n/2^3) + 3n 
                </BlockMath>
                <BlockMath>
                    T(n)= 2^4T(n/2^4) + 4n 
                </BlockMath>
                <BlockMath>.</BlockMath>
                <BlockMath>.</BlockMath>
                <BlockMath>.</BlockMath>
                <BlockMath>.</BlockMath>
                <BlockMath>
                    T(n)= 2^iT(n/2^i) + in 
                </BlockMath>
                <BlockMath>
                    T(1) = 1
                </BlockMath>
                <BlockMath>
                    n/2^i = 1\quad =>\quad n = 2^i
                </BlockMath>
                <BlockMath>
                    log_2 n = log_2 n^i = i log_2 n
                </BlockMath>
                <BlockMath>
                    log_2 n = i
                </BlockMath>
                <BlockMath>
                    T(n) = nT(1) + n log_2 n
                </BlockMath>
                <BlockMath>
                    T(n) = n + n log_2 n 
                </BlockMath>
                <BlockMath>
                    O(n log_2 n)
                </BlockMath>
            </div>
        </div>
    )
}

export default time_Complexity;
