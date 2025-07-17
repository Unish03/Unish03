export const javaQuestionsHtml: { question: string; answer: string }[] = [
    {
        question: '1. What is Java? Explain its features.',
        answer: `Java is a high-level, object-oriented programming language developed by Sun Microsystems (now Oracle) in 1995.<br>
            <b>Key features:</b><br>
            • Platform Independent: Write Once, Run Anywhere (WORA).<br>
            • Object-Oriented: Follows OOP principles like encapsulation and inheritance.<br>
            • Robust: Strong memory management and exception handling.<br>
            • Multithreaded: Supports concurrent execution of threads.<br>
            • Secure: No explicit pointers and runs in a virtual machine.`
    },
    {
        question: '2. What are the main principles of Object-Oriented Programming (OOP)?',
        answer: `<b>1. Encapsulation:</b> Wrapping data and methods in a single unit (class).<br>
            <b>2. Abstraction:</b> Hiding implementation details and showing only the functionality.<br>
            <b>3. Inheritance:</b> Allowing a class to inherit properties and methods from another class.<br>
            <b>4. Polymorphism:</b> Using a single interface to represent different forms (overloading and overriding).`
    },
    {
        question: '3. Differentiate between JDK, JRE, and JVM.',
        answer: `<b>JDK (Java Development Kit):</b> Provides tools for development (compiler, debugger).<br>
            <b>JRE (Java Runtime Environment):</b> Includes libraries and JVM for running Java applications.<br>
            <b>JVM (Java Virtual Machine):</b> Converts bytecode into machine code and executes it.`
    },
    {
        question: '4. Explain the concept of platform independence in Java.',
        answer: `Java programs are compiled into bytecode, which is platform-independent. Bytecode is executed by the JVM, which is platform-specific, ensuring the same Java program runs on any OS with a compatible JVM.`
    },
    {
        question: '5. What is the significance of the main method in Java?',
        answer: `The main method is the entry point of a Java application. Its signature is:<br>
            <code>public static void main(String[] args)</code><br>
            • public: Accessible globally.<br>
            • static: Allows the JVM to call it without object instantiation.<br>
            • void: Returns no value.<br>
            • String[] args: Accepts command-line arguments.`
    },
    {
        question: '6. How does Java achieve memory management?',
        answer: `Java uses automatic garbage collection to manage memory. Objects are allocated in the heap memory, and when they are no longer referenced, the garbage collector deallocates them.`
    },
    {
        question: '7. What are constructors in Java? How are they different from methods?',
        answer: `• Constructors: Special methods to initialize objects.<br>
        • Name matches the class.<br>
        • No return type.<br>
        • Difference from methods: Methods perform actions; constructors initialize objects.`
    },
    {
        question: '8. Explain method overloading and method overriding with examples.',
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
        question: '9. What is inheritance in Java? Discuss its types.',
        answer: `Inheritance allows a class to acquire the properties and methods of another class using the extends keyword.<br>
        Types:<br>
        1. Single: One class inherits from another.<br>
        2. Multilevel: A chain of inheritance.<br>
        3. Hierarchical: Multiple classes inherit from one superclass.<br>
        4. Multiple (via interfaces): A class implements multiple interfaces.`
    },
    {
        question: '10. Define polymorphism and its types in Java.',
        answer: `Polymorphism allows methods to perform different tasks based on the object.<br>
        Types:<br>
        1. Compile-time (Method Overloading).<br>
        2. Runtime (Method Overriding).`
    },
    {
        question: '11. What is an interface in Java, and how does it differ from an abstract class?',
        answer: `• Interface: A collection of abstract methods and static constants.<br>
        • Can have default and static methods (since Java 8).<br>
        • A class can implement multiple interfaces.<br>
        <b>Difference:</b><br>
        • Abstract class can have both abstract and concrete methods; an interface has abstract methods by default (Java 7 and below).<br>
        • A class extends one abstract class but can implement multiple interfaces.`
    },
    {
        question: '12. Describe the access modifiers in Java.',
        answer: `• Public: Accessible everywhere.<br>
        • Protected: Accessible within the same package and subclasses.<br>
        • Default: Accessible within the same package only.<br>
        • Private: Accessible within the same class only.`
    },
    {
        question: '13. What is encapsulation? How is it implemented in Java?',
        answer: `Encapsulation is bundling data (variables) and methods into a single unit (class). It's implemented using:<br>
        1. Private access modifiers for fields.<br>
        2. Public getter and setter methods for access.`
    },
    {
        question: '14. Explain the concept of packages in Java.',
        answer: `Packages are namespaces used to group related classes and interfaces. They help avoid name conflicts and improve organization.`
    },
    {
        question: '15. What are static variables and methods? Provide examples.',
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
        question: '16. Discuss the lifecycle of a thread in Java.',
        answer: `1. New: Thread is created.<br>
        2. Runnable: Thread is ready to run.<br>
        3. Running: Thread is executing.<br>
        4. Blocked/Waiting: Thread is waiting for a resource.<br>
        5. Terminated: Thread execution is complete.`
    },
    {
        question: '17. What is exception handling? How is it implemented in Java?',
        answer: `Exception handling manages runtime errors using try, catch, throw, throws, and finally.`
    },
    {
        question: '18. Differentiate between throw and throws keywords.',
        answer: `• throw: Used to explicitly throw an exception.<br>
        • throws: Declares exceptions a method might throw.`
    },
    {
        question: '19. What are checked and unchecked exceptions?',
        answer: `• Checked: Checked at compile-time (e.g., IOException).<br>
        • Unchecked: Occur at runtime (e.g., NullPointerException).`
    },
    {
        question: '20. Explain the concept of synchronization in Java.',
        answer: `Synchronization prevents thread interference by allowing only one thread to access a critical section at a time, using the synchronized keyword.`
    },
    {
        question: '21. What is the Java Collections Framework?',
        answer: `A unified architecture for storing and manipulating groups of objects, including interfaces like List, Set, and Map.`
    },
    {
        question: '22. Differentiate between ArrayList and LinkedList.',
        answer: `• ArrayList: Backed by a dynamic array, faster for indexing.<br>
        • LinkedList: Backed by a doubly-linked list, better for insertions/deletions.`
    },
    {
        question: '23. What is a HashMap? How does it work internally?',
        answer: `HashMap stores key-value pairs using a hash table. Keys are hashed to determine the index, and collisions are handled using linked lists or trees.`
    },
    {
        question: '24. Explain the significance of the equals() and hashCode() methods.',
        answer: `• equals(): Checks logical equality.<br>
        • hashCode(): Provides a unique hash for an object, used in hash-based collections like HashMap.`
    },
    {
        question: '25. What is the difference between Comparable and Comparator?',
        answer: `• Comparable: Used to define natural ordering.<br>
        • Comparator: Defines custom ordering.`
    },
    {
        question: '26. Describe the Java Memory Model (JMM).',
        answer: `Defines how threads interact through memory, ensuring visibility and ordering of variable accesses.`
    },
    {
        question: '27. What is garbage collection in Java? How does it work?',
        answer: `Garbage collection automatically deallocates memory for objects no longer in use, reclaiming memory in the heap.`
    },
    {
        question: '28. Explain the concept of Java annotations.',
        answer: `Annotations provide metadata about code, such as @Override, @Deprecated, and custom annotations.`
    },
    {
        question: '29. What are lambda expressions? Provide a use case.',
        answer: `Lambda expressions provide a concise way to implement functional interfaces.<br>
        Example:<br>
        <code>
        List&lt;Integer&gt; list = Arrays.asList(1, 2, 3);
        list.forEach(n -> System.out.println(n));
        </code>`
    },
    {
        question: '30. Discuss the Stream API in Java.',
        answer: `The Stream API processes collections of objects in a functional style, supporting operations like filter, map, and reduce.`
    },
    {
        question: '31. What is the purpose of the Optional class?',
        answer: `Optional prevents NullPointerException by representing optional values.`
    },
    {
        question: '32. Explain the try-with-resources statement.',
        answer: `Manages resources (like files) automatically, ensuring they are closed after use.<br>
        Example:<br>
        <code>
        try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
            // Read file
        }
        </code>`
    },
    {
        question: '33. What is the difference between final, finally, and finalize()?',
        answer: `• final: Prevents modification of variables, methods, or classes.<br>
        • finally: Ensures execution of code after a try-catch.<br>
        • finalize(): Called by the garbage collector before destroying an object.`
    },
    {
        question: '34. How does the volatile keyword affect thread behavior?',
        answer: `Ensures visibility of changes to a variable across threads, preventing caching.`
    },
    {
        question: '35. What are design patterns?',
        answer: `Design patterns are reusable solutions to common software design problems. Examples: Singleton, Factory, Observer.`
    },
    {
        question: '36. Explain the Singleton design pattern.',
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
        question: '37. What is JDBC? How is it used?',
        answer: `JDBC (Java Database Connectivity) is an API for connecting to databases.<br>
        Steps:<br>
        1. Load driver.<br>
        2. Establish connection.<br>
        3. Execute SQL queries.<br>
        4. Close connection.`
    },
    {
        question: '38. Discuss the differences between Statement and PreparedStatement.',
        answer: `• Statement: Used for static queries.<br>
        • PreparedStatement: Precompiled and supports dynamic queries.`
    },
    {
        question: '39. What is the purpose of the transient keyword?',
        answer: `Excludes fields from serialization.`
    },
    {
        question: '40. Explain serialization and deserialization.',
        answer: `• Serialization: Converts an object to a byte stream.<br>
        • Deserialization: Converts a byte stream back to an object.`
    },
    {
        question: '41. What are inner classes?',
        answer: `Classes defined within another class. Types: static, non-static, local, and anonymous.`
    },
    {
        question: '42. Describe the use of the synchronized keyword.',
        answer: `Locks a block/method to allow only one thread access at a time.`
    },
    {
        question: '43. What is the difference between String, StringBuilder, and StringBuffer?',
        answer: `• String: Immutable.<br>
        • StringBuilder: Mutable, non-thread-safe.<br>
        • StringBuffer: Mutable, thread-safe.`
    },
    {
        question: '44. Explain the concept of immutability in Java.',
        answer: `Immutable objects cannot be modified after creation, e.g., String.`
    },
    {
        question: '45. How does Java handle memory leaks?',
        answer: `Java uses garbage collection but memory leaks can occur if references to unused objects are maintained.`
    },
    {
        question: '46. What are functional interfaces?',
        answer: `Interfaces with a single abstract method, e.g., Runnable.`
    },
    {
        question: '47. Discuss the role of the default keyword in interfaces.',
        answer: `Allows adding methods to interfaces without breaking existing implementations.`
    },
    {
        question: '48. What is the enum type in Java?',
        answer: `Used to define a set of named constants.<br>
        Example:<br>
        <code>
        enum Day { MONDAY, TUESDAY }
        </code>`
    },
    {
        question: '49. Explain the concept of reflection in Java.',
        answer: `Allows inspection and modification of classes, methods, and fields at runtime.`
    },
    {
        question: '50. What are modules in Java?',
        answer: `Introduced in Java 9, modules allow better packaging, encapsulation, and dependency management.`
    }
];
