# Heapsort

## It is a comparison-based in-place and unstable sorting algorithm with worst case time complexity of O(n log n) and is based on binary heap data structure.

![wikipedia](https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif)

It is usually represented in an array as it can be easily used to element supposing parent is stored at index i ~(i=0)

```
  iParent(i)     = floor((i-1) / 2) where floor functions map a real number to the smallest leading integer.
  iLeftChild(i)  = 2*i + 1
  iRightChild(i) = 2*i + 2
```

There are two types of heaps:
1.Max heap-here items are stored in an order such that value in a parent node is greater than the values in its two children nodes.
2.Min heap.  
First step is to create max heap
A sorted array is created by repeatedly removing the largest element from the heap (the root of the heap), and inserting it into the array.The heap is updated after each removal to maintain the heap property. Once all objects have been removed from the heap, the result is a sorted array.

```javascript

```
