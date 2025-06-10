# Consecutive Substrings

## Description
This project contains a solution for generating **all consecutive substrings** of a given string.  
A consecutive substring is a contiguous sequence of characters from the original string.

For example, for the input `'abc'`, the output will be:  
`['a', 'ab', 'abc', 'b', 'bc', 'c']`

---

## How It Works
The solution uses two nested loops to iterate over all possible start and end indices in the string.  
- The outer loop sets the start index of the substring.  
- The inner loop sets the end index.  
- For each pair, the substring is extracted and added to the results.

This approach ensures all possible consecutive substrings are captured in the order they appear.

---

## Time Complexity
The time complexity is **O(n²)**, where *n* is the length of the input string.  
This is because two nested loops are required to generate every possible substring.

---

## Installation & Usage

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
