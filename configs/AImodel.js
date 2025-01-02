const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const courseOutlineAIModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a study material for Python for Exam and level of difficulty will be EASY with summary of course, list of chapters along with summary for each chapter, topic list in each chapter, all results in json format\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "course_name": "Introduction to Python Programming",\n  "difficulty": "Easy",\n  "course_summary": "This course provides a gentle introduction to Python programming, focusing on fundamental concepts and practical application. It\'s designed for beginners with no prior programming experience, and aims to build a solid foundation for further learning.",\n  "chapters": [\n    {\n      "chapter_number": 1,\n      "chapter_name": "Getting Started with Python",\n      "chapter_summary": "This chapter covers the basics of setting up Python and introduces the Python interactive environment. It also explains fundamental concepts like printing output and using comments.",\n       "topics": [\n        "Installation of Python",\n        "Introduction to the Python Interpreter",\n        "Writing Your First Program: `print()` function",\n        "Comments in Python",\n        "Basic Syntax and Structure",\n         "Running Python Programs"\n\n      ]\n    },\n    {\n      "chapter_number": 2,\n      "chapter_name": "Variables and Data Types",\n      "chapter_summary": "This chapter introduces the concept of variables for storing data, and different basic data types like integers, floats, and strings. It also explains how to perform basic arithmetic operations.",\n      "topics": [\n        "What are Variables?",\n        "Naming Conventions for Variables",\n        "Integer Data Type",\n        "Float Data Type",\n        "String Data Type",\n        "Basic Arithmetic Operations (+, -, *, /, %)",\n         "Type Conversion"\n       ]\n    },\n    {\n      "chapter_number": 3,\n      "chapter_name": "Working with Strings",\n      "chapter_summary": "This chapter focuses on working with strings, exploring various string operations, and introducing string formatting.",\n      "topics": [\n        "String Creation and Manipulation",\n        "String Concatenation",\n        "String Indexing and Slicing",\n        "String Length (`len()` function)",\n        "Common String Methods (e.g., `upper()`, `lower()`)",\n        "String Formatting (f-strings)",\n          "String Immutability"\n      ]\n    },\n     {\n      "chapter_number": 4,\n      "chapter_name": "User Input and Basic Output",\n      "chapter_summary": "This chapter teaches how to get input from the user and display output. It focuses on using input() and print() functions and how to work with strings and variables.",\n      "topics": [\n        "The `input()` function",\n        "Storing User Input in Variables",\n        "Displaying Output with `print()`",\n         "Combining Text and Variables in Output"\n\n      ]\n    },\n    {\n      "chapter_number": 5,\n      "chapter_name": "Making Decisions: Conditional Statements",\n      "chapter_summary": "This chapter covers conditional statements that allow you to make decisions based on certain conditions. It introduces `if`, `elif`, and `else` statements.",\n      "topics": [\n        "Introduction to Conditional Logic",\n        "The `if` statement",\n        "The `else` statement",\n        "The `elif` statement",\n        "Comparison Operators (==, !=, >, <, >=, <=)",\n        "Logical Operators (`and`, `or`, `not`)"\n\n      ]\n    },\n    {\n      "chapter_number": 6,\n      "chapter_name": "Repeating Actions: Loops",\n       "chapter_summary":"This chapter introduces loops for repeating a block of code multiple times. The main focus is on for and while loop with simple examples.",\n       "topics": [\n          "Introduction to Loops",\n          "The `for` loop",\n          "Iterating over a range of numbers",\n          "Iterating over strings",\n           "The `while` loop",\n          "Controlling loops with `break` and `continue`",\n           "Use of counter in loops"\n\n       ]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

export const generateNotesAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "Generate exam material detail content for each chapter, Make sure to include all topics point in the content, make sure to give content in the HTML format (Do not add html,head,body,title tag), the chapters:\n{\n      \"chapter_number\": 1,\n      \"chapter_name\": \"Basic Operations and Data Types\",\n      \"chapter_summary\": \"Practice with basic arithmetic, variable assignments, and different data types (integers, floats, strings). Focus is on using the correct types for calculations and output.\",\n      \"topics\": [\n        \"Arithmetic Operations\",\n        \"Variable Assignments and Reassignments\",\n        \"Integer and Float Arithmetic\",\n        \"String Manipulation and Concatenation\",\n        \"Type Casting\"\n      ]\n    }"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```html\n    <h2>Chapter 1: Basic Operations and Data Types</h2>\n    <p><strong>Chapter Summary:</strong> Practice with basic arithmetic, variable assignments, and different data types (integers, floats, strings). Focus is on using the correct types for calculations and output.</p>\n\n    <h3>Topics and Exam Content:</h3>\n\n    <h4>1. Arithmetic Operations</h4>\n    <ul>\n        <li><strong>Addition (+):</strong>\n            <ul>\n                <li>Perform addition of two or more numbers.</li>\n                <li>Understand the order of operations (PEMDAS/BODMAS).</li>\n                <li>Example Questions: \n                    <ul>\n                        <li>What is the result of 15 + 7?</li>\n                        <li>Calculate 5 + 3 + 10.</li>\n                        <li>Solve: 20 + 5 * 2</li>\n                     </ul>\n                 </li>\n            </ul>\n        </li>\n        <li><strong>Subtraction (-):</strong>\n            <ul>\n                <li>Perform subtraction of two numbers.</li>\n                  <li>Example Questions: \n                    <ul>\n                        <li>What is the result of 25 - 12?</li>\n                        <li>Calculate 18 - 6.</li>\n                    </ul>\n                 </li>\n            </ul>\n        </li>\n        <li><strong>Multiplication (*):</strong>\n            <ul>\n                <li>Perform multiplication of two or more numbers.</li>\n                <li>Example Questions: \n                    <ul>\n                         <li>What is the result of 8 * 4?</li>\n                         <li>Calculate 6 * 3 * 2.</li>\n                    </ul>\n                </li>\n            </ul>\n        </li>\n         <li><strong>Division (/):</strong>\n            <ul>\n                <li>Perform division of two numbers, understanding the result can be a float.</li>\n                 <li>Example Questions: \n                    <ul>\n                         <li>What is the result of 20 / 4?</li>\n                          <li>Calculate 10 / 3. (What is the result data type?)</li>\n                    </ul>\n                 </li>\n            </ul>\n        </li>\n         <li><strong>Modulo (%):</strong>\n            <ul>\n                <li>Understand the modulo operator and find the remainder of a division.</li>\n                <li>Example Questions: \n                    <ul>\n                         <li>What is the result of 15 % 4?</li>\n                         <li>Calculate 27 % 5</li>\n                    </ul>\n                </li>\n            </ul>\n        </li>\n        <li><strong>Exponentiation (**):</strong>\n            <ul>\n               <li>Calculate exponents of a number.</li>\n                <li>Example Questions:\n                     <ul>\n                        <li>What is the result of 2 ** 3?</li>\n                        <li>Calculate 5 ** 2</li>\n                    </ul>\n                </li>\n            </ul>\n         </li>\n    </ul>\n\n    <h4>2. Variable Assignments and Reassignments</h4>\n    <ul>\n        <li><strong>Variable Assignment:</strong>\n            <ul>\n                <li>Assign values to variables using the assignment operator (=).</li>\n                 <li>Example Questions: \n                    <ul>\n                         <li>Assign the value 10 to a variable named 'x'.</li>\n                         <li>Assign the string \"hello\" to a variable named 'message'.</li>\n                    </ul>\n                </li>\n            </ul>\n        </li>\n        <li><strong>Variable Reassignment:</strong>\n            <ul>\n                <li>Change the value of an existing variable.</li>\n                 <li>Example Questions:\n                     <ul>\n                        <li>If x = 5, then set x = x + 2, what is the final value of x?</li>\n                        <li>Variable named 'count' is initially assigned 10, then reassigned to 20. What's the value after reassignment?</li>\n                    </ul>\n                 </li>\n            </ul>\n        </li>\n         <li><strong>Naming conventions:</strong>\n            <ul>\n                <li>Understand rules for naming variables.</li>\n                <li>Example Questions:\n                     <ul>\n                        <li>Is '1var' a valid variable name? Why?</li>\n                        <li>Which of the following are valid variable names: my_variable, MyVariable, my variable, 1stVariable?</li>\n                    </ul>\n                </li>\n            </ul>\n         </li>\n    </ul>\n\n    <h4>3. Integer and Float Arithmetic</h4>\n    <ul>\n        <li><strong>Integer Arithmetic:</strong>\n            <ul>\n                <li>Perform arithmetic operations with integers.</li>\n                <li>Understand that integer division can sometimes result in a float in some languages.</li>\n                <li>Example Questions: \n                    <ul>\n                        <li>What is 10 // 3, and what is the data type of the output?</li>\n                        <li>Calculate (5 + 2) * 3</li>\n                    </ul>\n                </li>\n            </ul>\n        </li>\n        <li><strong>Float Arithmetic:</strong>\n            <ul>\n                <li>Perform arithmetic operations with floating-point numbers.</li>\n                 <li>Understand that floating-point numbers can have precision issues.</li>\n                <li>Example Questions:\n                     <ul>\n                        <li>What is 2.5 + 3.7?</li>\n                         <li>Calculate 1.0 / 3.0 and understand the result's representation.</li>\n                    </ul>\n                </li>\n            </ul>\n        </li>\n          <li><strong>Mixed Type Arithmetic:</strong>\n            <ul>\n                <li>Perform arithmetic with mixed integer and float types.</li>\n                 <li>Understand that operation involving int and float types will result in float type.</li>\n                <li>Example Questions:\n                     <ul>\n                        <li>What is the result type of 5 + 2.5?</li>\n                         <li>Calculate 4 * 2.0. What will be the output data type?</li>\n                    </ul>\n                 </li>\n            </ul>\n        </li>\n    </ul>\n\n    <h4>4. String Manipulation and Concatenation</h4>\n    <ul>\n        <li><strong>String Creation:</strong>\n            <ul>\n                <li>Create strings using single or double quotes.</li>\n                 <li>Example Questions:\n                     <ul>\n                        <li>Create a string variable that contains the value 'Python'.</li>\n                         <li>Create a string variable with a line break.</li>\n                     </ul>\n                 </li>\n            </ul>\n        </li>\n        <li><strong>String Concatenation:</strong>\n            <ul>\n                <li>Combine strings using the concatenation operator (+).</li>\n                 <li>Example Questions:\n                     <ul>\n                        <li>Combine the strings 'Hello' and 'World' to get 'HelloWorld'</li>\n                        <li>Given two variables a = '10' and b = '20'. What is a + b?</li>\n                     </ul>\n                 </li>\n            </ul>\n        </li>\n          <li><strong>String length:</strong>\n            <ul>\n                <li>Find the length of a string.</li>\n                <li>Example Questions:\n                     <ul>\n                         <li>Find the length of the string 'programming'.</li>\n                          <li>How many characters are there in the string '  test  '?</li>\n                    </ul>\n                 </li>\n            </ul>\n        </li>\n    </ul>\n\n     <h4>5. Type Casting</h4>\n    <ul>\n        <li><strong>Integer Casting:</strong>\n            <ul>\n                <li>Convert values to integers using appropriate casting function.</li>\n                 <li>Understand that casting a non-numerical string to an integer will cause an error.</li>\n                 <li>Example Questions:\n                     <ul>\n                        <li>Convert the string \"123\" to an integer.</li>\n                        <li>What is the result of converting the float 2.7 to int?</li>\n                     </ul>\n                </li>\n            </ul>\n        </li>\n        <li><strong>Float Casting:</strong>\n            <ul>\n                <li>Convert values to floating-point numbers using the appropriate casting function.</li>\n                 <li>Understand the result of casting int to float.</li>\n                <li>Example Questions:\n                     <ul>\n                        <li>Convert the integer 10 to a float.</li>\n                        <li>Convert the string \"3.14\" to a float.</li>\n                    </ul>\n                </li>\n            </ul>\n        </li>\n          <li><strong>String Casting:</strong>\n            <ul>\n                <li>Convert values to strings using the appropriate casting function.</li>\n                <li>Example Questions:\n                     <ul>\n                        <li>Convert the number 123 to a string.</li>\n                         <li>Convert the float 2.5 to a string.</li>\n                     </ul>\n                </li>\n            </ul>\n        </li>\n    </ul>\n```\n"},
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
