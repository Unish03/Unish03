export const javaQuestionsHtml: { question: string; answer: string }[] = [
    {
        question: 'What is Java? Explain its features.',
        answer: `Java is a high-level, object-oriented programming language developed by Sun Microsystems (now Oracle) in 1995.<br>
            <b>Key features:</b><br>
            • Platform Independent: Write Once, Run Anywhere (WORA).<br>
            • Object-Oriented: Follows OOP principles like encapsulation and inheritance.<br>
            • Robust: Strong memory management and exception handling.<br>
            • Multithreaded: Supports concurrent execution of threads.<br>
            • Secure: No explicit pointers and runs in a virtual machine.`
    },
    {
        question: 'What are the main principles of Object-Oriented Programming (OOP)?',
        answer: `<b>1. Encapsulation:</b> Wrapping data and methods in a single unit (class).<br>
            <b>2. Abstraction:</b> Hiding implementation details and showing only the functionality.<br>
            <b>3. Inheritance:</b> Allowing a class to inherit properties and methods from another class.<br>
            <b>4. Polymorphism:</b> Using a single interface to represent different forms (overloading and overriding).`
    },
    {
        question: 'Differentiate between JDK, JRE, and JVM.',
        answer: `<b>JDK (Java Development Kit):</b> Provides tools for development (compiler, debugger).<br>
            <b>JRE (Java Runtime Environment):</b> Includes libraries and JVM for running Java applications.<br>
            <b>JVM (Java Virtual Machine):</b> Converts bytecode into machine code and executes it.`
    },
    {
        question: 'Explain the concept of platform independence in Java.',
        answer: `Java programs are compiled into bytecode, which is platform-independent. Bytecode is executed by the JVM, which is platform-specific, ensuring the same Java program runs on any OS with a compatible JVM.`
    },
    {
        question: 'What is the significance of the main method in Java?',
        answer: `The main method is the entry point of a Java application. Its signature is:<br>
            <code>public static void main(String[] args)</code><br>
            • public: Accessible globally.<br>
            • static: Allows the JVM to call it without object instantiation.<br>
            • void: Returns no value.<br>
            • String[] args: Accepts command-line arguments.`
    },
    {
        question: 'How does Java achieve memory management?',
        answer: `Java uses automatic garbage collection to manage memory. Objects are allocated in the heap memory, and when they are no longer referenced, the garbage collector deallocates them.`
    },
    {
        question: 'What are constructors in Java? How are they different from methods?',
        answer: `• Constructors: Special methods to initialize objects.<br>
        • Name matches the class.<br>
        • No return type.<br>
        • Difference from methods: Methods perform actions; constructors initialize objects.`
    },
    {
        question: 'Explain method overloading and method overriding with examples.',
        answer: `• Overloading: Same method name, different parameters (compile-time polymorphism).<br>
        <code>
        class Example {
            void display(int a) { }
            void display(String b) { }
        }
        </code><br>
        • Overriding: Subclass provides a new implementation for a method in the superclass (runtime polymorphism).<br>
        <code>
        class Parent {
            void display() { }
        }
        class Child extends Parent {
            @Override
            void display() { }
        }
        </code>`
    },
    {
        question: 'What is inheritance in Java? Discuss its types.',
        answer: `Inheritance allows a class to acquire the properties and methods of another class using the extends keyword.<br>
        Types:<br>
        1. Single: One class inherits from another.<br>
        2. Multilevel: A chain of inheritance.<br>
        3. Hierarchical: Multiple classes inherit from one superclass.<br>
        4. Multiple (via interfaces): A class implements multiple interfaces.`
    },
    {
        question: 'Define polymorphism and its types in Java.',
        answer: `Polymorphism allows methods to perform different tasks based on the object.<br>
        Types:<br>
        1. Compile-time (Method Overloading).<br>
        2. Runtime (Method Overriding).`
    },
    {
        question: 'What is an interface in Java, and how does it differ from an abstract class?',
        answer: `• Interface: A collection of abstract methods and static constants.<br>
        • Can have default and static methods (since Java 8).<br>
        • A class can implement multiple interfaces.<br>
        <b>Difference:</b><br>
        • Abstract class can have both abstract and concrete methods; an interface has abstract methods by default (Java 7 and below).<br>
        • A class extends one abstract class but can implement multiple interfaces.`
    },
    {
        question: 'Describe the access modifiers in Java.',
        answer: `• Public: Accessible everywhere.<br>
        • Protected: Accessible within the same package and subclasses.<br>
        • Default: Accessible within the same package only.<br>
        • Private: Accessible within the same class only.`
    },
    {
        question: 'What is encapsulation? How is it implemented in Java?',
        answer: `Encapsulation is bundling data (variables) and methods into a single unit (class). It's implemented using:<br>
        1. Private access modifiers for fields.<br>
        2. Public getter and setter methods for access.`
    },
    {
        question: 'Explain the concept of packages in Java.',
        answer: `Packages are namespaces used to group related classes and interfaces. They help avoid name conflicts and improve organization.`
    },
    {
        question: 'What are static variables and methods? Provide examples.',
        answer: `• Static Variable: Belongs to the class, shared by all objects.<br>
        • Static Method: Can be called without creating an object of the class.<br>
        <code>
        class Example {
            static int count = 0; // Static variable
            static void display() { // Static method
                System.out.println("Count: " + count);
            }
        }
        </code>`
    },
    {
        question: 'Discuss the lifecycle of a thread in Java.',
        answer: `1. New: Thread is created.<br>
        2. Runnable: Thread is ready to run.<br>
        3. Running: Thread is executing.<br>
        4. Blocked/Waiting: Thread is waiting for a resource.<br>
        5. Terminated: Thread execution is complete.`
    },
    {
        question: 'What is exception handling? How is it implemented in Java?',
        answer: `Exception handling manages runtime errors using try, catch, throw, throws, and finally.`
    },
    {
        question: 'Differentiate between throw and throws keywords.',
        answer: `• throw: Used to explicitly throw an exception.<br>
        • throws: Declares exceptions a method might throw.`
    },
    {
        question: 'What are checked and unchecked exceptions?',
        answer: `• Checked: Checked at compile-time (e.g., IOException).<br>
        • Unchecked: Occur at runtime (e.g., NullPointerException).`
    },
    {
        question: 'Explain the concept of synchronization in Java.',
        answer: `Synchronization prevents thread interference by allowing only one thread to access a critical section at a time, using the synchronized keyword.`
    },
    {
        question: 'What is the Java Collections Framework?',
        answer: `A unified architecture for storing and manipulating groups of objects, including interfaces like List, Set, and Map.`
    },
    {
        question: 'Differentiate between ArrayList and LinkedList.',
        answer: `• ArrayList: Backed by a dynamic array, faster for indexing.<br>
        • LinkedList: Backed by a doubly-linked list, better for insertions/deletions.`
    },
    {
        question: 'What is a HashMap? How does it work internally?',
        answer: `HashMap stores key-value pairs using a hash table. Keys are hashed to determine the index, and collisions are handled using linked lists or trees.`
    },
    {
        question: 'Explain the significance of the equals() and hashCode() methods.',
        answer: `• equals(): Checks logical equality.<br>
        • hashCode(): Provides a unique hash for an object, used in hash-based collections like HashMap.`
    },
    {
        question: 'What is the difference between Comparable and Comparator?',
        answer: `• Comparable: Used to define natural ordering.<br>
        • Comparator: Defines custom ordering.`
    },
    {
        question: 'Describe the Java Memory Model (JMM).',
        answer: `Defines how threads interact through memory, ensuring visibility and ordering of variable accesses.`
    },
    {
        question: 'What is garbage collection in Java? How does it work?',
        answer: `Garbage collection automatically deallocates memory for objects no longer in use, reclaiming memory in the heap.`
    },
    {
        question: 'Explain the concept of Java annotations.',
        answer: `Annotations provide metadata about code, such as @Override, @Deprecated, and custom annotations.`
    },
    {
        question: 'What are lambda expressions? Provide a use case.',
        answer: `Lambda expressions provide a concise way to implement functional interfaces.<br>
        Example:<br>
        <code>
        List&lt;Integer&gt; list = Arrays.asList(1, 2, 3);
        list.forEach(n -> System.out.println(n));
        </code>`
    },
    {
        question: 'Discuss the Stream API in Java.',
        answer: `The Stream API processes collections of objects in a functional style, supporting operations like filter, map, and reduce.`
    },
    {
        question: 'What is the purpose of the Optional class?',
        answer: `Optional prevents NullPointerException by representing optional values.`
    },
    {
        question: 'Explain the try-with-resources statement.',
        answer: `Manages resources (like files) automatically, ensuring they are closed after use.<br>
        Example:<br>
        <code>
        try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
            // Read file
        }
        </code>`
    },
    {
        question: 'What is the difference between final, finally, and finalize()?',
        answer: `• final: Prevents modification of variables, methods, or classes.<br>
        • finally: Ensures execution of code after a try-catch.<br>
        • finalize(): Called by the garbage collector before destroying an object.`
    },
    {
        question: 'How does the volatile keyword affect thread behavior?',
        answer: `Ensures visibility of changes to a variable across threads, preventing caching.`
    },
    {
        question: 'What are design patterns?',
        answer: `Design patterns are reusable solutions to common software design problems. Examples: Singleton, Factory, Observer.`
    },
    {
        question: 'Explain the Singleton design pattern.',
        answer: `Restricts a class to one instance and provides a global access point to it.<br>
        <code>
        class Singleton {
            private static Singleton instance;
            private Singleton() { }
            public static Singleton getInstance() {
                if (instance == null) {
                    instance = new Singleton();
                }
                return instance;
            }
        }
        </code>`
    },
    {
        question: 'What is JDBC? How is it used?',
        answer: `JDBC (Java Database Connectivity) is an API for connecting to databases.<br>
        Steps:<br>
        1. Load driver.<br>
        2. Establish connection.<br>
        3. Execute SQL queries.<br>
        4. Close connection.`
    },
    {
        question: 'Discuss the differences between Statement and PreparedStatement.',
        answer: `• Statement: Used for static queries.<br>
        • PreparedStatement: Precompiled and supports dynamic queries.`
    },
    {
        question: 'What is the purpose of the transient keyword?',
        answer: `Excludes fields from serialization.`
    },
    {
        question: 'Explain serialization and deserialization.',
        answer: `• Serialization: Converts an object to a byte stream.<br>
        • Deserialization: Converts a byte stream back to an object.`
    },
    {
        question: 'What are inner classes?',
        answer: `Classes defined within another class. Types: static, non-static, local, and anonymous.`
    },
    {
        question: 'Describe the use of the synchronized keyword.',
        answer: `Locks a block/method to allow only one thread access at a time.`
    },
    {
        question: 'What is the difference between String, StringBuilder, and StringBuffer?',
        answer: `• String: Immutable.<br>
        • StringBuilder: Mutable, non-thread-safe.<br>
        • StringBuffer: Mutable, thread-safe.`
    },
    {
        question: 'Explain the concept of immutability in Java.',
        answer: `Immutable objects cannot be modified after creation, e.g., String.`
    },
    {
        question: 'How does Java handle memory leaks?',
        answer: `Java uses garbage collection but memory leaks can occur if references to unused objects are maintained.`
    },
    {
        question: 'What are functional interfaces?',
        answer: `Interfaces with a single abstract method, e.g., Runnable.`
    },
    {
        question: 'Discuss the role of the default keyword in interfaces.',
        answer: `Allows adding methods to interfaces without breaking existing implementations.`
    },
    {
        question: 'What is the enum type in Java?',
        answer: `Used to define a set of named constants.<br>
        Example:<br>
        <code>
        enum Day { MONDAY, TUESDAY }
        </code>`
    },
    {
        question: 'Explain the concept of reflection in Java.',
        answer: `Allows inspection and modification of classes, methods, and fields at runtime.`
    },
    {
        question: 'What are modules in Java?',
        answer: `Introduced in Java 9, modules allow better packaging, encapsulation, and dependency management.`
    },
    {
        question: 'Two Sum: Given an array of integers, find two numbers that add up to a specific target and return their indices.',
        answer: `<pre><code>public int[] twoSum(int[] nums, int target) {
                Map<Integer, Integer> map = new HashMap<>();
                for (int i = 0; i < nums.length; i++) {
                    int complement = target - nums[i];
                    if (map.containsKey(complement)) {
                        return new int[] { map.get(complement), i };
                    }
                    map.put(nums[i], i);
                }
                return new int[] {};
            }</code></pre>`
    },
    {
        question: 'Reverse a String: Write a function to reverse a string without using built-in functions.',
        answer: `<pre><code>public String reverseString(String s) {
        StringBuilder reversed = new StringBuilder();
        for (int i = s.length() - 1; i >= 0; i--) {
            reversed.append(s.charAt(i));
        }
        return reversed.toString();
        or
        // Using StringBuilder
        return new StringBuilder(s).reverse().toString();
        }</code></pre>`
    },
    {
        question: 'Palindrome Check: Determine if a given string is a palindrome.',
        answer: `<pre><code>public boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
                if (s.charAt(left++) != s.charAt(right--)) return false;
        }
        return true;
         }</code></pre>`
    },
    {
        question: 'Merge Two Sorted Lists: Merge two sorted linked lists and return it as a new sorted list.',
        answer: `<pre><code>public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if (l1 == null) return l2;
        if (l2 == null) return l1;
        if (l1.val < l2.val) {
                l1.next = mergeTwoLists(l1.next, l2);
                return l1;
        } else {
                l2.next = mergeTwoLists(l1, l2.next);
                return l2;
        }
        }</code></pre>`
    },
    {
        question: 'Longest Substring Without Repeating Characters: Find the length of the longest substring without repeating characters.',
        answer: `<pre><code>public int lengthOfLongestSubstring(String s) {
        Set&lt;Character&gt; set = new HashSet&lt;&gt;();
        int left = 0, maxLen = 0;
        for (int right = 0; right &lt; s.length(); right++) {
                while (set.contains(s.charAt(right))) {
                        set.remove(s.charAt(left++));
                }
                set.add(s.charAt(right));
                maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
        }</code></pre>`
    },
    {
        question: `Valid Parentheses: Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.`,
        answer: `<pre><code>public boolean isValid(String s) {
        Stack&lt;Character&gt; stack = new Stack&lt;&gt;();
        for (char c : s.toCharArray()) {
                if (c == '(' || c == '{' || c == '[') {
                        stack.push(c);
                } else if (!stack.isEmpty() && 
                        ((c == ')' && stack.peek() == '(') ||
                        (c == '}' && stack.peek() == '{') ||
                        (c == ']' && stack.peek() == '['))) {
                        stack.pop();
                } else {
                        return false;
                }
        }
        return stack.isEmpty();
        }</code></pre>`
    },
    {
        question: 'Search in Rotated Sorted Array: Search for a target value in a rotated sorted array.',
        answer: `<pre><code>public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left &lt;= right) {
                int mid = (left + right) / 2;
                if (nums[mid] == target) return mid;
                if (nums[left] &lt;= nums[mid]) {
                        if (nums[left] &lt;= target && target &lt; nums[mid]) right = mid - 1;
                        else left = mid + 1;
                } else {
                        if (nums[mid] &lt; target && target &lt;= nums[right]) left = mid + 1;
                        else right = mid - 1;
                }
        }
        return -1;
        }</code></pre>`
    },
    {
        question: 'Container With Most Water: Given n non-negative integers, find two lines that together with the x-axis form a container, such that the container contains the most water.',
        answer: `<pre><code>public int maxArea(int[] height) {
        int left = 0, right = height.length - 1, max = 0;
        while (left &lt; right) {
                max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
                if (height[left] &lt; height[right]) left++;
                else right--;
        }
        return max;
        }</code></pre>`
    },
    {
        question: '3Sum: Find all unique triplets in the array which gives the sum of zero.',
        answer: `<pre><code>public List&lt;List&lt;Integer&gt;&gt; threeSum(int[] nums) {
        Arrays.sort(nums);
        List&lt;List&lt;Integer&gt;&gt; result = new ArrayList&lt;&gt;();
        for (int i = 0; i &lt; nums.length - 2; i++) {
                if (i &gt; 0 && nums[i] == nums[i - 1]) continue;
                int left = i + 1, right = nums.length - 1;
                while (left &lt; right) {
                        int sum = nums[i] + nums[left] + nums[right];
                        if (sum == 0) {
                                result.add(Arrays.asList(nums[i], nums[left++], nums[right--]));
                                while (left &lt; right && nums[left] == nums[left - 1]) left++;
                                while (left &lt; right && nums[right] == nums[right + 1]) right--;
                        } else if (sum &lt; 0) left++;
                        else right--;
                }
        }
        return result;
        }</code></pre>`
    },
    {
        question: 'Remove Nth Node From End of List: Remove the n-th node from the end of a linked list and return its head.',
        answer: `<pre><code>public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode slow = dummy, fast = dummy;
        for (int i = 0; i &lt;= n; i++) fast = fast.next;
        while (fast != null) {
                slow = slow.next;
                fast = fast.next;
        }
        slow.next = slow.next.next;
        return dummy.next;
        }</code></pre>`
    },
    {
        question: 'Maximum Subarray: Find the contiguous subarray with the largest sum.',
        answer: `<pre><code>public int maxSubArray(int[] nums) {
        int max = nums[0], currentSum = nums[0];
        for (int i = 1; i &lt; nums.length; i++) {
                currentSum = Math.max(nums[i], currentSum + nums[i]);
                max = Math.max(max, currentSum);
        }
        return max;
        }</code></pre>`
    },
    {
        question: 'Climbing Stairs: You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
        answer: `<pre><code>public int climbStairs(int n) {
        if (n &lt;= 2) return n;
        int first = 1, second = 2;
        for (int i = 3; i &lt;= n; i++) {
                int third = first + second;
                first = second;
                second = third;
        }
        return second;
        }</code></pre>`
    },
    {
        question: 'Set Matrix Zeroes: Given a m x n matrix, if an element is 0, set its entire row and column to 0.',
        answer: `<pre><code>public void setZeroes(int[][] matrix) {
        boolean firstRow = false, firstCol = false;
        for (int i = 0; i &lt; matrix.length; i++) {
                for (int j = 0; j &lt; matrix[0].length; j++) {
                        if (matrix[i][j] == 0) {
                                if (i == 0) firstRow = true;
                                if (j == 0) firstCol = true;
                                matrix[i][0] = 0;
                                matrix[0][j] = 0;
                        }
                }
        }
        for (int i = 1; i &lt; matrix.length; i++) {
                for (int j = 1; j &lt; matrix[0].length; j++) {
                        if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;
                }
        }
        if (firstRow) Arrays.fill(matrix[0], 0);
        if (firstCol) for (int i = 0; i &lt; matrix.length; i++) matrix[i][0] = 0;
       }</code></pre>`
    },
    {
        question: 'Group Anagrams',
        answer: `<pre><code>public List&lt;List&lt;String&gt;&gt; groupAnagrams(String[] strs) {
        Map&lt;String, List&lt;String&gt;&gt; map = new HashMap&lt;&gt;();
        for (String s : strs) {
                char[] chars = s.toCharArray();
                Arrays.sort(chars);
                String key = new String(chars);
                map.putIfAbsent(key, new ArrayList&lt;&gt;());
                map.get(key).add(s);
        }
        return new ArrayList&lt;&gt;(map.values());
}</code></pre>`
    },
    {
        question: 'Merge Intervals',
        answer: `<pre><code>public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        List&lt;int[]&gt; merged = new ArrayList&lt;&gt;();
        for (int[] interval : intervals) {
                if (merged.isEmpty() || merged.get(merged.size() - 1)[1] &lt; interval[0]) {
                        merged.add(interval);
                } else {
                        merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], interval[1]);
                }
        }
        return merged.toArray(new int[merged.size()][]);
}</code></pre>`
    },
    {
        question: 'Linked List Cycle',
        answer: `<pre><code>public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) return false;
        ListNode slow = head, fast = head.next;
        while (slow != fast) {
                if (fast == null || fast.next == null) return false;
                slow = slow.next;
                fast = fast.next.next;
        }
        return true;
}</code></pre>`
    },
    {
        question: 'Implement Stack using Queues',
        answer: `<pre><code>class MyStack {
        Queue&lt;Integer&gt; queue = new LinkedList&lt;&gt;();
        public void push(int x) {
                queue.add(x);
                for (int i = 1; i &lt; queue.size(); i++) {
                        queue.add(queue.poll());
                }
        }
        public int pop() {
                return queue.poll();
        }
        public int top() {
                return queue.peek();
        }
        public boolean empty() {
                return queue.isEmpty();
        }
}</code></pre>`
    },
    {
        question: 'Minimum Window Substring',
        answer: `<pre><code>public String minWindow(String s, String t) {
        if (s.length() &lt; t.length()) return "";
        Map&lt;Character, Integer&gt; map = new HashMap&lt;&gt;();
        for (char c : t.toCharArray()) map.put(c, map.getOrDefault(c, 0) + 1);
        int left = 0, count = 0, minLen = Integer.MAX_VALUE, start = 0;
        for (int right = 0; right &lt; s.length(); right++) {
                char c = s.charAt(right);
                if (map.containsKey(c)) {
                        map.put(c, map.get(c) - 1);
                        if (map.get(c) &gt;= 0) count++;
                }
                while (count == t.length()) {
                        if (right - left + 1 &lt; minLen) {
                                minLen = right - left + 1;
                                start = left;
                        }
                        char lc = s.charAt(left++);
                        if (map.containsKey(lc)) {
                                map.put(lc, map.get(lc) + 1);
                                if (map.get(lc) &gt; 0) count--;
                        }
                }
        }
        return minLen == Integer.MAX_VALUE ? "" : s.substring(start, start + minLen);
}</code></pre>`
    },
    {
        question: 'Word Search',
        answer: `<pre><code>public boolean exist(char[][] board, String word) {
        for (int i = 0; i &lt; board.length; i++) {
                for (int j = 0; j &lt; board[0].length; j++) {
                        if (dfs(board, word, i, j, 0)) return true;
                }
        }
        return false;
}
private boolean dfs(char[][] board, String word, int i, int j, int index) {
        if (index == word.length()) return true;
        if (i &lt; 0 || j &lt; 0 || i &gt;= board.length || j &gt;= board[0].length || board[i][j] != word.charAt(index)) return false;
        char temp = board[i][j];
        board[i][j] = '#';
        boolean found = dfs(board, word, i + 1, j, index + 1) ||
                dfs(board, word, i - 1, j, index + 1) ||
                dfs(board, word, i, j + 1, index + 1) ||
                dfs(board, word, i, j - 1, index + 1);
        board[i][j] = temp;
        return found;
}</code></pre>`
    },
    {
        question: 'Number of Islands',
        answer: `<pre><code>public int numIslands(char[][] grid) {
        int count = 0;
        for (int i = 0; i &lt; grid.length; i++) {
                for (int j = 0; j &lt; grid[0].length; j++) {
                        if (grid[i][j] == '1') {
                                count++;
                                dfs(grid, i, j);
                        }
                }
        }
        return count;
}
private void dfs(char[][] grid, int i, int j) {
        if (i &lt; 0 || i &gt;= grid.length || j &lt; 0 || j &gt;= grid[0].length || grid[i][j] == '0') return;
        grid[i][j] = '0';
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
}</code></pre>`
    },
    {
        question: 'Course Schedule',
        answer: `<pre><code>public boolean canFinish(int numCourses, int[][] prerequisites) {
        List&lt;List&lt;Integer&gt;&gt; graph = new ArrayList&lt;&gt;();
        for (int i = 0; i &lt; numCourses; i++) graph.add(new ArrayList&lt;&gt;());
        int[] inDegree = new int[numCourses];
        for (int[] prereq : prerequisites) {
                graph.get(prereq[1]).add(prereq[0]);
                inDegree[prereq[0]]++;
        }
        Queue&lt;Integer&gt; queue = new LinkedList&lt;&gt;();
        for (int i = 0; i &lt; numCourses; i++) if (inDegree[i] == 0) queue.add(i);
        int count = 0;
        while (!queue.isEmpty()) {
                int course = queue.poll();
                count++;
                for (int next : graph.get(course)) {
                        if (--inDegree[next] == 0) queue.add(next);
                }
        }
        return count == numCourses;
}</code></pre>`
    },
    {
        question: 'Implement Trie (Prefix Tree)',
        answer: `<pre><code>class Trie {
        private TrieNode root;
        public Trie() {
                root = new TrieNode();
        }
        public void insert(String word) {
                TrieNode node = root;
                for (char c : word.toCharArray()) {
                        if (!node.containsKey(c)) node.put(c, new TrieNode());
                        node = node.get(c);
                }
                node.setEnd();
        }
        public boolean search(String word) {
                TrieNode node = searchPrefix(word);
                return node != null && node.isEnd();
        }
        public boolean startsWith(String prefix) {
                return searchPrefix(prefix) != null;
        }
        private TrieNode searchPrefix(String word) {
                TrieNode node = root;
                for (char c : word.toCharArray()) {
                        if (node.containsKey(c)) node = node.get(c);
                        else return null;
                }
                return node;
        }
}
class TrieNode {
        private TrieNode[] links;
        private final int R = 26;
        private boolean isEnd;
        public TrieNode() {
                links = new TrieNode[R];
        }
        public boolean containsKey(char ch) {
                return links[ch - 'a'] != null;
        }
        public TrieNode get(char ch) {
                return links[ch - 'a'];
        }
        public void put(char ch, TrieNode node) {
                links[ch - 'a'] = node;
        }
        public void setEnd() {
                isEnd = true;
        }
        public boolean isEnd() {
                return isEnd;
        }
}</code></pre>`
    },
    {
        question: 'Add and Search Word - Data Structure Design',
        answer: `<pre><code>class WordDictionary {
        private TrieNode root;
        public WordDictionary() {
                root = new TrieNode();
        }
        public void addWord(String word) {
                TrieNode node = root;
                for (char c : word.toCharArray()) {
                        if (!node.containsKey(c)) node.put(c, new TrieNode());
                        node = node.get(c);
                }
                node.setEnd();
        }
        public boolean search(String word) {
                return search(word, 0, root);
        }
        private boolean search(String word, int index, TrieNode node) {
                if (index == word.length()) return node.isEnd();
                char c = word.charAt(index);
                if (c == '.') {
                        for (char ch = 'a'; ch &lt;= 'z'; ch++) {
                                if (node.containsKey(ch) && search(word, index + 1, node.get(ch))) return true;
                        }
                        return false;
                } else {
                        return node.containsKey(c) && search(word, index + 1, node.get(c));
                }
        }
}</code></pre>`
    },
    {
        question: 'Word Ladder',
        answer: `<pre><code>public int ladderLength(String beginWord, String endWord, List&lt;String&gt; wordList) {
        Set&lt;String&gt; wordSet = new HashSet&lt;&gt;(wordList);
        if (!wordSet.contains(endWord)) return 0;
        Queue&lt;String&gt; queue = new LinkedList&lt;&gt;();
        queue.add(beginWord);
        int steps = 1;
        while (!queue.isEmpty()) {
                int size = queue.size();
                for (int i = 0; i &lt; size; i++) {
                        String word = queue.poll();
                        if (word.equals(endWord)) return steps;
                        for (int j = 0; j &lt; word.length(); j++) {
                                char[] chars = word.toCharArray();
                                for (char c = 'a'; c &lt;= 'z'; c++) {
                                        chars[j] = c;
                                        String newWord = new String(chars);
                                        if (wordSet.contains(newWord)) {
                                                queue.add(newWord);
                                                wordSet.remove(newWord);
                                        }
                                }
                        }
                }
                steps++;
        }
        return 0;
}</code></pre>`
    },
    {
        question: 'Find Median from Data Stream',
        answer: `<pre><code>class MedianFinder {
        private PriorityQueue&lt;Integer&gt; small = new PriorityQueue&lt;&gt;(Collections.reverseOrder());
        private PriorityQueue&lt;Integer&gt; large = new PriorityQueue&lt;&gt;();
        public void addNum(int num) {
                small.add(num);
                large.add(small.poll());
                if (small.size() &lt; large.size()) small.add(large.poll());
        }
        public double findMedian() {
                if (small.size() &gt; large.size()) return small.peek();
                return (small.peek() + large.peek()) / 2.0;
        }
}</code></pre>`
    },
    {
        question: 'Sliding Window Maximum',
        answer: `<pre><code>public int[] maxSlidingWindow(int[] nums, int k) {
        Deque&lt;Integer&gt; deque = new ArrayDeque&lt;&gt;();
        int[] result = new int[nums.length - k + 1];
        for (int i = 0; i &lt; nums.length; i++) {
                if (!deque.isEmpty() && deque.peek() == i - k) deque.poll();
                while (!deque.isEmpty() && nums[deque.peekLast()] &lt; nums[i]) deque.pollLast();
                deque.offer(i);
                if (i &gt;= k - 1) result[i - k + 1] = nums[deque.peek()];
        }
        return result;
}</code></pre>`
    },
    {
        question: 'Longest Consecutive Sequence',
        answer: `<pre><code>public int longestConsecutive(int[] nums) {
        Set&lt;Integer&gt; set = new HashSet&lt;&gt;();
        for (int num : nums) set.add(num);
        int maxStreak = 0;
        for (int num : nums) {
                if (!set.contains(num - 1)) {
                        int currentNum = num;
                        int streak = 1;
                        while (set.contains(currentNum + 1)) {
                                currentNum++;
                                streak++;
                        }
                        maxStreak = Math.max(maxStreak, streak);
                }
        }
        return maxStreak;
}</code></pre>`
    },
    {
        question: 'Graph Valid Tree',
        answer: `<pre><code>public boolean validTree(int n, int[][] edges) {
        if (edges.length != n - 1) return false;
        UnionFind uf = new UnionFind(n);
        for (int[] edge : edges) {
                if (!uf.union(edge[0], edge[1])) return false;
        }
        return true;
}
class UnionFind {
        private int[] parent;
        public UnionFind(int n) {
                parent = new int[n];
                for (int i = 0; i &lt; n; i++) parent[i] = i;
        }
        public int find(int x) {
                if (parent[x] != x) parent[x] = find(parent[x]);
                return parent[x];
        }
        public boolean union(int x, int y) {
                int rootX = find(x), rootY = find(y);
                if (rootX == rootY) return false;
                parent[rootX] = rootY;
                return true;
        }
}</code></pre>`
    },
    {
        question: 'Number of Connected Components in an Undirected Graph',
        answer: `<pre><code>public int countComponents(int n, int[][] edges) {
        UnionFind uf = new UnionFind(n);
        for (int[] edge : edges) uf.union(edge[0], edge[1]);
        Set&lt;Integer&gt; uniqueParents = new HashSet&lt;&gt;();
        for (int i = 0; i &lt; n; i++) uniqueParents.add(uf.find(i));
        return uniqueParents.size();
}</code></pre>`
    }
];
