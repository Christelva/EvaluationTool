// src/App.js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/theme'
import Navigation from './components/UI/Navigation'
import Routes from './routes'

const batches = [
  { "name": "Batch #1",
  "batch": "1",
  "startDate": "2017-05-10",
  "endDate": "2017-05-12",
  "students": [{
        "firstName": "Aloise",
        "lastName": "Smartman",
        "latestCode": 1,
        "codes": [],
        "evaluationRemarks": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
        "picture": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
      },
      {
        "firstName": "Carlin",
        "lastName": "Cadman",
        "latestCode": 1,
        "codes": [],
          "evaluationRemarks": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
        "picture": "http://dummyimage.com/100x100.jpg/dddddd/000000"
      },
      {
        "firstName": "Mord",
        "lastName": "Cornill",
        "latestCode": 2,
        "codes": [],         "evaluationRemarks": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
        "picture": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
      },
      {
        "firstName": "Donaugh",
        "lastName": "Eynald",
        "latestCode": 1,
        "codes": [],       "evaluationRemarks": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
        "picture": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
      },
      {
        "firstName": "Theobald",
        "lastName": "Willeman",
        "latestCode": 1,
        "codes": [],       "evaluationRemarks": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        "picture": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
      },
      {
        "firstName": "Kenton",
        "lastName": "Rentelll",
        "latestCode": 2,
        "codes": [],       "evaluationRemarks": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
        "picture": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
      }]
},
{ "name": "Batch #2",
  "batch": "2",
  "startDate": "2017-05-12",
  "endDate": "2018-05-02",
  "students": [{
    "firstName": "Travus",
    "lastName": "Turl",
    "latestCode": 3,
    "codes": [],
    "evaluationRemarks": "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    "picture": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  },
  {
    "firstName": "Huntington",
    "lastName": "Prewett",
    "latestCode": 1,
    "codes": [],   "evaluationRemarks": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    "picture": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  },
  {
    "firstName": "Tiffie",
    "lastName": "O'Kelly",
    "latestCode": 3,
    "codes": [],
    "evaluationRemarks": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    "picture": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
  },
  {
    "firstName": "Valentia",
    "lastName": "Ferrie",
    "latestCode": 1,
    "codes": [],     "evaluationRemarks": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    "picture": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  },
  {
    "firstName": "Courtnay",
    "lastName": "Gosselin",
    "latestCode": 1,
    "codes": [],     "evaluationRemarks": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "picture": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  },
  {
    "firstName": "Konrad",
    "lastName": "Izakson",
    "latestCode": 3,
    "codes": [],
    "evaluationRemarks": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "picture": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  },
  {
    "firstName": "Janenna",
    "lastName": "Gymblett",
    "latestCode": 1,
    "codes": [],   "evaluationRemarks": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    "picture": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
  }]
},
{ "name": "Batch #3",
  "batch": "3",
  "startDate": "2018-05-02",
  "endDate": "2017-05-04",
  "students": [ {
    "firstName": "Leone",
    "lastName": "Sulland",
    "latestCode": 1,
    "codes": [],     "evaluationRemarks": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    "picture": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  },
  {
    "firstName": "Lorna",
    "lastName": "Petry",
    "latestCode": 2,
    "codes": [],   "evaluationRemarks": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    "picture": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  },
  {
    "firstName": "Claudian",
    "lastName": "Wixon",
    "latestCode": 2,
    "codes": [],  "evaluationRemarks": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
    "picture": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  },
  {
    "firstName": "Lev",
    "lastName": "Trinke",
    "latestCode": 1,
    "codes": [],    "evaluationRemarks": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    "picture": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
  },
  {
    "firstName": "Silvain",
    "lastName": "Mico",
    "latestCode": 2,
    "codes": [],   "evaluationRemarks": "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    "picture": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
  },
  {
    "firstName": "Grayce",
    "lastName": "Legier",
    "latestCode": 3,
    "codes": [],
    "evaluationRemarks": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    "picture": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
  },
  {
    "firstName": "Kincaid",
    "lastName": "Dwane",
    "latestCode": 1,
    "codes": [],   "evaluationRemarks": "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    "picture": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  },
  {
    "firstName": "Vinita",
    "lastName": "Paget",
    "latestCode": 3,
    "codes": [],
    "evaluationRemarks": "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "picture": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  },
  {
    "firstName": "Craggie",
    "lastName": "Kardos",
    "latestCode": 3,
    "codes": [],
    "evaluationRemarks": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    "picture": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  },
  {
    "firstName": "Nani",
    "lastName": "Press",
    "latestCode": 2,
    "codes": [],    "evaluationRemarks": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "picture": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  },
  {
    "firstName": "Catlin",
    "lastName": "Stock",
    "latestCode": 1,
    "codes": [],    "evaluationRemarks": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    "picture": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  },
  {
    "firstName": "Lazaro",
    "lastName": "Mattaser",
    "latestCode": 2,
    "codes": [],   "evaluationRemarks": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    "picture": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
  },
  {
    "firstName": "Janela",
    "lastName": "Stobo",
    "latestCode": 2,
    "codes": [],   "evaluationRemarks": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "picture": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  },
  {
    "firstName": "Byrom",
    "lastName": "Strippling",
    "latestCode": 3,
    "codes": [],
    "evaluationRemarks": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    "picture": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }
  ]
}

]
class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Navigation />
          <Routes />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
