# Debugging Analysis

## Scenario 1: [/api/v1/health] Endpoint

-   **Breakpoint Location:** app.ts, line 48
-   **Objective:**  Check if the /api/v1/health endpoint generates the correct JSON response.

### Debugger Observations

-   **Variable States:** 
- req: Contains request details (e.g., headers and URL).
- res: Used to send the response back to the client.
- process.uptime(): Returns the server uptime in seconds.
- new Date().toISOString(): Generates the current timestamp.
-   **Call Stack:**
- The request flows from the middleware stack to the route handler function for /api/v1/health.
-   **Behavior:** 
- The endpoint creates a JSON object with status, uptime, timestamp, and version values, which are correct.

### Analysis

-   What did you learn from this scenario?
- The endpoint works as expected.
-   Did you observe any unexpected behavior? If so, what might be the 
- no
cause?
-   Are there areas for improvement or refactoring in this part of the code?
- No isssues were found in the file.
-   How does this enhance your understanding of the overall project?
- The npm servers works as per the expectations in the port.

## Scenario 2: Endpoint(GET)



-   **Breakpoint Location:** app.ts, line 32
-   **Objective:**  Understanding the End points of GET req and res

### Debugger Observations

-   **Variable States:** res, rep
-   **Call Stack:**  The request flows from the above to the end breakpoint of the task
-   **Behavior:** 
- The GET response is given some tasks to retrive creating the API documentation.
### Analysis

-   What did you learn from this scenario?
- I learned that how the APT doumentation can be genrated in the swagger using reposne and request.

-   Did you observe any unexpected behavior? If so, what might be the cause?
- NO 

-   Are there areas for improvement or refactoring in this part of the code?
- There could be more defination of what has been done.

-   How does this enhance your understanding of the overall project?  
- This scenario ehnaced my knowledge of how to use the req and response to get some data in the form of API documentation.

## Scenario 3: Jest Test 


-   **Breakpoint Location:** Potfolioperformance.test.ts, 157
-   **Objective:** I was trying to understand the behaviour of how the calculate asset method works.

### Debugger Observations

-   **Variable States:** exports,  jest 
-   **Call Stack:** The functions leads from the test porrtfolio file to the end of the breakpoint
-   **Behavior:** THe functions is working as it was expected.

### Analysis

-   What did you learn from this scenario?
- How the tests works.

-   Did you observe any unexpected behavior? If so, what might be the cause?
- No 

-   Are there areas for improvement or refactoring in this part of the code?
- No

-   How does this enhance your understanding of the overall project?
- It adds a lot of knowledge related the tests.