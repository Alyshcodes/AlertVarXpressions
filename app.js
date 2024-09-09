   //  ALERT

   var firstName = "Alishba";
   var lastName = "Shahid";
   var email = "alishbashahid@gmail.com";
   var phoneNumber = "123-456-7890";
   var password = "password123";
   
   alert("First Name: " + firstName);
   alert("Last Name: " + lastName);
   alert("Email: " + email);
   alert("Phone Number: " + phoneNumber);
   alert("Password: " + password);
   
   // Ques 2: (Alert this Statement):
   alert("You're learning JavaScript!");
   
   // Ques 3:  (Alert a Statement):
   alert("Hi! I am Alishba Shahid, and i'm learning javascript");
   
   //  VARIABLE FOR STRING
   
   var myFavoriteColor = "black";
   
   var hobby; // Declaration without definition
   hobby = "Sketching";// Assigning a string value
   
   var teamName = "Code Masters";
   alert("Team Name: " + teamName);
   
   var bestMan = "Charlie";  // Original declaration
   bestMan = "Alex";  // Assigning a new string value
   
   
   
   
   
   // CHAPTER 3: (VARIABLES FOR NUMBERS)
   
   // Ques 1:  (Declaring a variable ):
   var caseQty;
   
   // Ques 2:  (Assigning a number to a variable):
   caseQty = 144;
   console.log(caseQty);
   
   // Ques 3:
   var num = "9";
   var numAsNumber = Number(num);
   var result = numAsNumber + 1;
   
   
   // Ques 4:
   var sumOfNumbers;
   sumOfNumbers = 5 + 3;
   console.log(sumOfNumbers);
   
   // Ques 5:
   var merchTotal  = 100;
   var shippingCharge = 10;
   var totalCost = merchTotal + shippingCharge;
   console.log(totalCost);
   
   // Ques 6:
   var number = 14;
   number = number + 3;
   console.log(number);
   
   
   
   
   
   
   //    CHAPTER 5 "MATH EXPRESSIONS"
   
   
   
   var num1 = 10;
   var num2 = 5;
   var sum = num1 + num2;
   
   document.write("The sum of " + num1 + " and " + num2 + " is: " + sum + "<br>" + "<br>");
   
   
   
   
   
   var num1 = 10, num2 = 5;
   
   document.write("Subtraction: " + (num1 - num2) + "<br>");
   document.write("Multiplication: " + (num1 * num2) + "<br>");
   document.write("Division: " + (num1 / num2) + "<br>");
   document.write("Modulus: " + (num1 % num2) + "<br>" + "<br>");
   
   
   
   
   
   // a. Declare a variable.
   var num;
   
   // b. Show the value of the variable in the browser like "Value after variable declaration is: ??"
   document.write("Value after variable declaration is: " + num + "<br>");
   
   // c. Initialize the variable with some number.
   num = 5;
   
   // d. Show the value of the variable like "Initial value: 5"
   document.write("Initial value: " + num + "<br>");
   
   // e. Increment the variable.
   num++;
   
   // f. Show the value of the variable like "Value after increment is: 6"
   document.write("Value after increment is: " + num + "<br>");
   
   // g. Add 7 to the variable.
   num = num + 7;
   
   // h. Show the value after addition like "Value after addition is: 13"
   document.write("Value after addition is: " + num + "<br>");
   
   // i. Decrement the variable.
   num--;
   
   // j. Show the value after decrement like "Value after decrement is: 12"
   document.write("Value after decrement is: " + num + "<br>");
   
   // k. Show the remainder after dividing the variable's value by 3.
   var remainder = num % 3;
   
   // l. Output the remainder like "The remainder is: 0"
   document.write("The remainder is: " + remainder + "<br>");
   
   
   
   
   // Store the ticket price in a variable
   var ticketPrice = 600;
   
   // Calculate the cost of buying 5 tickets
   var numberOfTickets = 5;
   var totalCost = ticketPrice * numberOfTickets;
   
   // Display the result in the browser
   document.write("The cost of buying " + numberOfTickets + " movie tickets is: " + totalCost + " PKR");
   
   
   
   
   
   // Define the number for which you want the multiplication table
   var number = 7; // You can change this to any number you like
   
   // Define the range of the table (1 to 10)
   var range = 10;
   
   // Loop to display the multiplication table
   for (var i = 1; i <= range; i++)
        { var result = number * i;
       document.write(number + " x " + i + " = " + result + "<br>");
   }
   
   
   
   
   
   // a. Store a Celsius temperature into a variable.
   var celsius = 25; // Example Celsius temperature
   
   // b. Convert it to Fahrenheit
   var fahrenheit = (celsius * 9/5) + 32;
   
   // Output the result
   document.write(celsius + "°C is " + fahrenheit + "°F<br>");
   
   // c. Now store a Fahrenheit temperature into a variable.
   var fahrenheitTemp = 77; // Example Fahrenheit temperature
   
   // d. Convert it to Celsius
   var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
   
   // Output the result
   document.write(fahrenheitTemp + "°F is " + celsiusTemp.toFixed(2) + "°C<br>");
   
   
   
   
   // a. Price of item 1
   var priceItem1 = 650; // Price in PKR
   
   // b. Price of item 2
   var priceItem2 = 100; // Price in PKR
   
   // c. Ordered quantity of item 1
   var quantityItem1 = 3; // Quantity
   
   // d. Ordered quantity of item 2
   var quantityItem2 = 7; // Quantity
   
   // e. Shipping charges
   var shippingCharges = 100; // Shipping charge in PKR
   
   // Compute the total cost
   var totalItem1Cost = priceItem1 * quantityItem1;
   var totalItem2Cost = priceItem2 * quantityItem2;
   var totalCost = totalItem1Cost + totalItem2Cost + shippingCharges;
   
   // Show the receipt in the browser
   document.write("Price of item 1 is " + priceItem1 + "<br>");
   document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
   document.write("Price of item 2 is " + priceItem2 + "<br>");
   document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
   document.write("Shipping charges " + shippingCharges + "<br><br>");
   
   document.write("Total cost of your order is " + totalCost);
   
   
   
   
   
   // Store total marks and marks obtained
   var totalMarks = 980;
   var marksObtained = 804;
   
   // Compute the percentage
   var percentage = (marksObtained / totalMarks) * 100;
   
   // Show the result in the browser
   document.write("Total Marks: " + totalMarks + "<br>");
   document.write("Marks Obtained: " + marksObtained + "<br>");
   document.write("Percentage: " + percentage.toFixed(2) + "%");
   
   
   
   
   
   
   
   // Exchange rates
   var usdToPkr = 104.80; // 1 US Dollar = 104.80 Pakistani Rupees
   var sarToPkr = 28; // 1 Saudi Riyal = 28 Pakistani Rupees
   
   // Amounts in USD and SAR
   var usdAmount = 10;
   var sarAmount = 25;
   
   // Convert total currency to Pakistani Rupees and compute
   var totalPkr = (usdAmount * usdToPkr) + (sarAmount * sarToPkr);
   
   // Display the result in the browser
   document.write("Total in Pakistani Rupees: " + totalPkr);
   
   
   
   
   
   // Initialize the variable with some number
   var initialNumber = 20; // Example number
   
   // Perform arithmetic operations in a single expression
   var result = ((initialNumber + 5) * 10) / 2;
   
   // Display the result in the browser
   document.write("The result of the arithmetic operations is: " + result);
   
   
   
   // Store the current year and birth year
   var currentYear = 2016;
   var birthYear = 1992;
   
   // Calculate the age assuming the birthday has already occurred this year
   var age = currentYear - birthYear;
   
   // Display the results in the browser
   document.write("Current year: " + currentYear + "<br>");
   document.write("Birth year: " + birthYear + "<br>");
   document.write("Your age is: " + age);
   
   
   
   
   // a. Store a radius into a variable
   var radius = 20; // Radius of the circle
   
   // b. Define the value of π
   var pi = 3.142;
   
   // Calculate the circumference
   var circumference = 2 * pi * radius;
   
   // Calculate the area
   var area = pi * radius * radius;
   
   // Display the results in the browser
   document.write("Radius of the circle: " + radius + "<br>");
   document.write("The circumference is: " + circumference.toFixed(6) + "<br>");
   document.write("The area is: " + area);
   
   
   
   
   
   
   
   var favoriteSnack = "chocolate chip";
   
   var currentAge = 15;
   
   var maximumAge = 65;
   
   var snacksPerDay = 3;
   
   var totalSnacks = (maximumAge - currentAge) * 365 * snacksPerDay;
   
   // Display the results in the browser
   document.write("Favorite snack: " + favoriteSnack + "<br>");
   document.write("Current age: " + currentAge + "<br>");
   document.write("Maximum age: " + maximumAge + "<br>");
   document.write("Amount of snacks per day: " + snacksPerDay + "<br>");
   document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge);
   
   
   
   
   