# Ecommercify API V1.0.0
[![Build Status](https://travis-ci.com/RexterR/ecommercify-backend.svg?token=Urss9g2V9ZAb5C1xdXdg&branch=master)](https://travis-ci.com/RexterR/ecommercify-backend)
- Variables
	- **URL** : *ecommercify-backend.herokuapp.com/api*
### Customer API

1. **SignUp Customer :** To SignUp Customer
	-  ***Type :***  `POST`
	- ***Route :***  *URL/customer/signup*
	- ***Required Auth:*** `NO`
	- ***Body :***
		1. name(R) : *Name of Customer*
		2. email(R) : *Email of Customer*
		3. contactNo: *Contact Number of Customer*
		4. password(R): *Password of Customer (Atleast 6 character Long)*
	- ***Return :*** 	*`JWT` Token*
2. **Login Customer :** To SignUp Customer
	-  ***Type :***  `POST`
	- ***Route :***  *URL/customer/login*
	- ***Required Auth:*** `NO`
	- ***Body :***
		1. username(R) : *Email/Contact No of Customer*
		2. password(R): *Password of Customer (Atleast 6 character Long)*
	- ***Return :*** 	*`JWT` Token*
3. **Get Customer  By username:** 
	-  ***Type :***  `GET`
	- ***Route :***  *URL/customer/:username*
	- ***Required Auth:*** `ADMIN`
	- ***Param:***
		1. username(R) : *Email/Contact No of Customer*
	- ***Return :*** 	*Customer Detail*
4. **Get Customer  By PageNo and PageCount:** 
	-  ***Type :***  `GET`
	- ***Route :***  *URL/customer*
	- ***Required Auth:*** `ADMIN`
	- ***Query:***
		1. perPage(R): *No of Customer needed per Page (`DEFAULT `= 0)*
		2. pageNo(R): *Page No*
	- ***Return :*** 	*Customer Details[]*
5. **Update Customer  By username:** 
	-  ***Type :***  `PATCH`
	- ***Route :***  *URL/customer/:username*
	- ***Required Auth:*** `ADMIN`
	- ***Param:***
		1. username`String`(R) : *Email/Contact No of Customer*
	- ***Body***
		1. name(`String`) : *Name of Customer*
		2. email(`String`): *Email Of Customer*
		3. contactNo(`String`): *Contact No Of Customer*
		4. isBlackListed(`Boolean`):To Blacklist Customer
	- ***Return :*** 	*Success Message*
6. **Delete Customer  By username:** 
	-  ***Type :***  `DELETE`
	- ***Route :***  *URL/customer/:username*
	- ***Required Auth:*** `ADMIN`
	- ***Param:***
		1. username(R) : *Email/Contact No of Customer*
	- ***Return :*** 	*Success Message*