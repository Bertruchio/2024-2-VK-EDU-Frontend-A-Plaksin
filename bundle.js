/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("mocks = \"\\n        <div class=\\\"chat__message chat__message--received\\\">\\n            <p class=\\\"chat__message-text\\\">\\u042F \\u0442\\u0443\\u0442 \\u043A\\u043E\\u0435-\\u0447\\u0442\\u043E \\u043D\\u0430\\u0440\\u0438\\u0441\\u043E\\u0432\\u0430\\u043B\\u0430. \\u041F\\u043E\\u0441\\u043C\\u043E\\u0442\\u0440\\u0438 \\u043A\\u0430\\u043A \\u0431\\u0443\\u0434\\u0435\\u0442 \\u0432\\u0440\\u0435\\u043C\\u044F.</p>\\n            <div class=\\\"chat__message-time\\\">\\n                10:53\\n                <div class=\\\"chat__message-status\\\">\\n                    <img src=\\\"src/images/check-icon.svg\\\" alt=\\\"checked\\\" class=\\\"chat__message-status\\\">\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat__message chat__message--image\\\">\\n            <div class=\\\"chat__message-photo\\\">\\n                <img src=\\\"src/images/j-drawing.jpg\\\" alt=\\\"Image message\\\">\\n                <div class=\\\"chat__message-time\\\">\\n                    10:53\\n                    <div class=\\\"chat__message-status\\\">\\n                        <img src=\\\"src/images/check-icon.svg\\\" alt=\\\"checked\\\" class=\\\"chat__message-status\\\">\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat__message chat__message--received\\\">\\n            <p class=\\\"chat__message-text\\\">\\u0422\\u0435\\u0431\\u0435 \\u043D\\u0440\\u0430\\u0432\\u0438\\u0442\\u0441\\u044F \\u043A\\u0430\\u043A \\u044F \\u043D\\u0430\\u0440\\u0438\\u0441\\u043E\\u0432\\u0430\\u043B\\u0430?</p>\\n            <div class=\\\"chat__message-time\\\">\\n                10:53\\n                <div class=\\\"chat__message-status\\\">\\n                    <img src=\\\"src/images/check-icon.svg\\\" alt=\\\"checked\\\" class=\\\"chat__message-status\\\">\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat__message chat__message--sent\\\">\\n            <p class=\\\"chat__message-text\\\">\\u0413\\u043E\\u0440\\u0436\\u0443\\u0441\\u044C \\u0442\\u043E\\u0431\\u043E\\u0439! \\u0422\\u044B \\u043A\\u0440\\u0443\\u0442\\u0430\\u044F!</p>\\n            <div class=\\\"chat__message-time\\\">\\n                10:53\\n                <div class=\\\"chat__message-status\\\">\\n                    <img src=\\\"src/images/check-icon.svg\\\" alt=\\\"checked\\\" class=\\\"chat__message-status\\\">\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"chat__message chat__message--sent\\\">\\n            <p class=\\\"chat__message-text\\\">\\u0414\\u0436\\u0435\\u043D, \\u0442\\u044B \\u043C\\u043E\\u043B\\u043E\\u0434\\u0435\\u0446!</p>\\n            <div class=\\\"chat__message-time\\\">\\n                10:53\\n                <div class=\\\"chat__message-status\\\">\\n                    <img src=\\\"src/images/check-icon.svg\\\" alt=\\\"checked\\\" class=\\\"chat__message-status\\\">\\n                </div>\\n            </div>\\n        </div>\\n        \";\ndocument.addEventListener('DOMContentLoaded', function () {\n  var form = document.querySelector('.chat__message-form');\n  var input = document.querySelector('.chat__form-input');\n  var chatWindow = document.querySelector('.chat__window');\n\n  // Проверка наличия элементов\n  if (!form || !input || !chatWindow) {\n    console.error(\"Не удалось найти необходимые элементы!\");\n    return;\n  }\n  form.addEventListener('submit', handleSubmit);\n  form.addEventListener('keypress', handleKeyPress);\n  function handleSubmit(event) {\n    event.preventDefault();\n    var messageText = input.value.trim();\n    if (messageText) {\n      addMessageToChat(messageText);\n      saveMessage(messageText);\n      input.value = '';\n    }\n  }\n  function handleKeyPress(event) {\n    if (event.key === 'Enter') {\n      form.dispatchEvent(new Event('submit'));\n    }\n  }\n  function saveMessage(message) {\n    var messages = JSON.parse(localStorage.getItem('messages')) || [];\n    messages.push(message);\n    localStorage.setItem('messages', JSON.stringify(messages));\n  }\n  function addMessageToChat(message) {\n    var messageElement = document.createElement('div');\n    messageElement.classList.add('chat__message', 'chat__message--sent');\n    var messageTextElement = document.createElement('p');\n    messageTextElement.classList.add('chat__message-text');\n    messageTextElement.innerText = message;\n    messageElement.appendChild(messageTextElement);\n    var messageTimeElement = document.createElement('div');\n    messageTimeElement.classList.add('chat__message-time');\n    messageTimeElement.innerText = new Date().toLocaleTimeString([], {\n      hour: '2-digit',\n      minute: '2-digit'\n    });\n    var messageStatusElement = document.createElement('div');\n    messageStatusElement.classList.add('chat__message-status');\n    var statusIcon = document.createElement('img');\n    statusIcon.src = 'src/images/check-icon.svg';\n    statusIcon.alt = 'checked';\n    statusIcon.classList.add('chat__message-status');\n    messageStatusElement.appendChild(statusIcon);\n    messageTimeElement.appendChild(messageStatusElement);\n    messageElement.appendChild(messageTimeElement);\n    chatWindow.appendChild(messageElement);\n    chatWindow.scrollTop = chatWindow.scrollHeight;\n  }\n  function loadMessages() {\n    var messages = JSON.parse(localStorage.getItem('messages')) || [];\n\n    // Удаляем все сообщения перед загрузкой\n    chatWindow.innerHTML = '';\n    var template = document.createElement('template');\n    template.innerHTML = mocks.trim();\n    chatWindow.appendChild(template.content);\n\n    // Загружаем сообщения при первой загрузке\n    messages.forEach(function (message) {\n      return addMessageToChat(message);\n    });\n  }\n  loadMessages();\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });