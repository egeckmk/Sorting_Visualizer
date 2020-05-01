import React from 'react'
import SortingVisualizer from './SortingVisualizer';
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-5 bg-green-300">
            <SortingVisualizer></SortingVisualizer>
            <div className="max-w-7xl mx-auto px-4 py-5 text-gray-900">
                <div className="flex items-start">
                <div className="w-1/2 mx-2 p-4 bg-gray-200 rounded-lg">
                    <div className="font-mono pb-24">
                    <p><strong className="text-yellow-500">MergeSort(</strong> A[0..n-1] <strong className="text-yellow-500">)</strong></p>
                    <p className="ml-10 text-purple-400">// Sorts array A[0..n − 1] by recursive mergesort</p>
                    <p className="ml-10 text-purple-400">// Input: An array A[0..n − 1] of orderable elements</p>
                    <p className="ml-10 text-purple-400">// Output: Array A[0..n − 1] sorted in nondecreasing order</p>
                    <p className="ml-10"><strong className="text-red-600">if</strong> n > 1</p>
                    <p className="ml-20"><strong className="text-blue-500">copy</strong> A[0..⌊n/2⌋ − 1] <strong className="text-blue-500">to</strong> B[0..⌊n/2⌋ − 1]</p>
                    <p className="ml-20"><strong className="text-blue-500">copy</strong> A[⌊n/2⌋..n − 1] <strong className="text-blue-500">to</strong> C[0..⌈n/2⌉ − 1]</p>
                    <p className="ml-20"><strong className="text-yellow-500">MergeSort(</strong> B[0..⌊n/2⌋ − 1] <strong className="text-yellow-500">)</strong></p>
                    <p className="ml-20"><strong className="text-yellow-500">MergeSort(</strong> C[0..⌈n/2⌉ − 1] <strong className="text-yellow-500">)</strong></p>
                    <p className="ml-20"><strong className="text-yellow-500">Merge(</strong> B, C, A <strong className="text-yellow-500">)</strong> <span class="text-purple-400">// see below</span></p>
                    </div>
                </div>
                <div class="w-1/2 mx-2 p-4 bg-gray-200 rounded-lg">
                    <div class="font-mono">
                    <p><strong className="text-yellow-500">Merge(</strong> B[0..p − 1], C[0..q − 1], A[0..p + q − 1] <strong className="text-yellow-500">)</strong></p>
                    <p className="ml-10 text-purple-400">// Merges two sorted arrays into one sorted array</p>
                    <p className="ml-10 text-purple-400">// Input: Arrays B[0..p − 1] and C[0..q − 1] both sorted</p>
                    <p className="ml-10 text-purple-400">// Output: Sorted array A[0..p + q − 1] of the elements of B and C</p>
                    <p className="ml-10">i <strong className="text-blue-500">←</strong> 0; j <strong className="text-blue-500">←</strong> 0; k <strong className="text-blue-500">←</strong> 0;</p>
                    <p className="ml-10"><strong className="text-red-600">while</strong> {'i < p'}<strong className="text-indigo-500"> and</strong> {'j < q'} <strong className="text-red-600">do</strong></p>
                    <p className="ml-20"><strong className="text-red-600">if</strong> B[i] ≤ C[j]</p>
                    <p className="ml-30">A[k] <strong className="text-blue-500">←</strong> B[i]; i <strong className="text-blue-500">←</strong> i+1</p>
                    <p className="ml-20"><strong className="text-red-600">else</strong> A[k] <strong className="text-blue-500">←</strong> C[j]; j <strong className="text-blue-500">←</strong> j+1</p>
                    <p className="ml-20">k <strong className="text-blue-500">←</strong> k+1</p>
                    <p className="ml-20"><strong className="text-red-600">if</strong> i == p</p>
                    <p className="ml-30"><strong className="text-blue-500">copy</strong> C[j..q − 1] <strong className="text-blue-500">to</strong> A[k..p + q − 1]</p>
                    <p className="ml-20"><strong className="text-red-600">else</strong> <strong className="text-blue-500">copy</strong> B[i..p − 1] <strong className="text-blue-500">to</strong> A[k..p + q − 1]</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
