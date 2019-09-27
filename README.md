# Persian Date component for React.js

Convert AD Date to Persian(Jalali) Date





First import component to your souce
```javascript
  import {PDate} from "./components/PDate";
  ```
 

Now use <PDate ... /> in render

Current Timestamp:
```javascript
  <PDate type={"timestamp"} />
  ```

Current Date:
```javascript
  <PDate type={"current"} />
  ```

Date:
```javascript
  <PDate type={"date"} y={2019} m={9} d={27} />
  ```
  
Date and Time:
```javascript
  <PDate type={"date"} y={2020} m={3} d={20} h={14} i={30} s={22} />
```
