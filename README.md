# 🚀 Inspect URL  

Inspect URL is a powerful Node.js utility designed to **validate URLs**, check them against a **blocked list**, and store the valid ones for further use. With simple commands and intuitive functionality, Inspect URL is your go-to tool for managing URLs efficiently.  

---

## 🌟 Features  
- 🔍 **URL Validation**: Check if the given URL is valid using the `validator` package.  
- 🛡️ **Blocklist Enforcement**: Ensure restricted URLs from `BlockedURL.txt` are not stored.  
- 💾 **Save Valid URLs**: Automatically store valid URLs in the `url.txt` file.  
- 🎨 **Colorful Output**: Enhanced console readability with `chalk`.  

---

## 📋 Prerequisites  
Before you begin, make sure you have the following:  
- [Node.js](https://nodejs.org/) (version 14 or higher)  

---

## 📦 Installation  
1. Clone this repository:  
   ```bash  
   git clone <repository-url>  
   cd inspect-url  
2. Install the required dependencies:
```
npm install
```  
## 🚀 Usage
1. Prepare a Blocklist
Create a file named BlockedURL.txt in the root directory and list the URLs you want to block (one per line).

2. Run the Script
Use the command-line interface to pass a URL:
```
node main.js <URL>
```  
## 🛠️ Example
Command:
```
node main.js https://example.com
```  
## Output:
1. ✅ If the URL is valid and not blocked:
```
URL is valid
```  
2. 🚫 If the URL is blocked:
```
Blocked URL 
``` 
3. ❌ If the URL is invalid:
```
<URL> is not a valid URL.
```  
## 🗂️ File Structure
1. inspect.js: Main script file that handles URL validation and processing.
2. BlockedURL.txt: File containing a list of blocked URLs.
3. url.txt: File where valid URLs are stored.

