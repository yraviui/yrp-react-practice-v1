import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import M01 from './components/m01select/Index';
import M02 from './components/m02pagination/Index';
import M03 from './components/m03/Index';
import M04 from './components/m04/Index';
import M05 from './components/m05/Index';
import M06 from './components/m06/Index';
import M07 from './components/m07/Index';
import M08 from './components/m08/Index';
import M09 from './components/m09/Index';
import M09A from './components/m09a/Index';
import M11 from './components/m11/Index';
import M11H01 from './components/m11/m11h01/Index';
import M11H02 from './components/m11/m11h02/Index';
import M11H03 from './components/m11/m11h03/Index';
import M11H04 from './components/m11/m11h04/Index';
import M11H05 from './components/m11/m11h05/Index';
import M11H06 from './components/m11/m11h06/Index';
import M11H07 from './components/m11/m11h07/Index';
import M11H08 from './components/m11/m11h08/Index';
import M11H09 from './components/m11/m11h09/Index';
import M11H10 from './components/m11/m11h10/Index';
import M11H08A from './components/m11/m11h08a/Index';
import M11H08B from './components/m11/m11h08b';
import M12 from './components/m12/Index';
import M09B from './components/m09b/Index';
import M06A from './components/m06a/Index';
import M13 from './components/m013/Index';
import M14 from './components/m14/Index';
import M15 from './components/m15/Index';
import M16 from './components/m16/Index';
import M01Page1 from './components/m01select/M01Page1';
import M02Page1 from './components/m02pagination/M02Page1';
import M11H06A from './components/m11/m11h06a';
import M11H08C from './components/m11/m11h08c/Index';
import M17 from './components/m17/Index';
import M18 from './components/m18/Index';
import M11h06B from './components/m11/m11h06b/Index';
import M19 from './components/m19/Index';
import M20 from './components/m20/Index';
import M21 from './components/m21/Index';
import M22 from './components/m22/Index';
import M24 from './components/m24/Index';
import M23 from './components/m23/Index';
import M25 from './components/m25/Index';
import M26 from './components/m26/Index';
import M26P01 from './components/m26/p01/Index';
import M26P02 from './components/m26/p02';
import M22A from './components/m22a/Index';
import M22B from './components/m22b/Index';
import M27 from './components/m27/Index';
import Page01 from './components/m27/Page01';
import Page02 from './components/m27/Page02';
import M22C from './components/m22c/Index';
import M28 from './components/m28/Index';
import M28Page01 from './components/m28/M28Page01';
import M28Page02 from './components/m28/M28Page02';
import M29 from './components/m29/Index';
import M30 from './components/m30';
import M30Page01 from './components/m30/M30Page01';
import M30Page02 from './components/m30/M30Page02';
import M31Page01 from './components/m31/M31Page01';
import M31Page02 from './components/m31/M31Page02';
import M31 from './components/m31/Index';
import M32 from './components/m32/Index';
import M33 from './components/m33/Index';
import M34 from './components/m34/Index';
import M35 from './components/m35/Index';
import M36 from './components/m36/Index';
import M37 from './components/m37/Index';
import M38 from './components/m38/Index';
import M39 from './components/m39/Index';
import M40 from './components/m40/Index';
import { StatusContextProvider } from './components/m40/StatusContext';
import M42 from './components/m42/Index';
import M22D from './components/m22d/Index';
//import M10 from './components/m10/Index';
const LazyM10 = React.lazy(() => import('./components/m10/Index'));

function App() {
  return (
    <div className="container">
      <div className='leftNav'>
        <ul>
          <li><a href='/'>M01</a></li>
          <li><a href='/m02'>M02</a></li>
          <li><a href='/m03'>M03</a></li>
          <li><a href='/m04'>M04</a></li>
          <li><a href='/m05'>M05</a></li>
          <li><a href='/m06'>M06</a></li>
          <li><a href='/m06a'>M06a</a></li>
          <li><a href='/m07'>M07</a></li>
          <li><a href='/m08'>M08</a></li>
          <li><a href='/m09'>M09</a></li>
          <li><a href='/m09a'>M09a</a></li>
          <li><a href='/m09b'>M09b</a></li>
          <li><a href='/m10'>M10</a></li>
          <li><a href='/m11'>M11 - Hooks</a></li>
          <li><a href='/m11/h02'>M11 - Hooks</a></li>
          <li><a href='/m11/h03'>M11 - Hooks</a></li>
          <li><a href='/m11/h04'>M11 - Hooks</a></li>
          <li><a href='/m11/h05'>M11 - Hooks</a></li>
          <li><a href='/m11/h06'>M11 - Hooks</a></li>
          <li><a href='/m11/h06a'>M11 - Hooks</a></li>
          <li><a href='/m11/h06b'>M11 - Hooks</a></li>
          <li><a href='/m11/h07'>M11 - Hooks</a></li>
          <li><a href='/m11/h08'>M11 - Hooks</a></li>
          <li><a href='/m11/h08a'>M11 - Hooks</a></li>
          <li><a href='/m11/h08b'>M11 - Hooks</a></li>
          <li><a href='/m11/h09'>M11 - Hooks</a></li>
          <li><a href='/m11/h10'>M11 - Hooks</a></li>
          <li><a href='/m12'>M12</a></li>
          <li><a href='/m13'>M13</a></li>
          <li><a href='/m14'>M14</a></li>
          <li><a href='/m15'>M15</a></li>
          <li><a href='/m16'>M16</a></li>
          <li><a href='/m17'>M17</a></li>
          <li><a href='/m18'>M18</a></li>
          <li><a href='/m19'>M19</a></li>
          <li><a href='/m20'>M20</a></li>
          <li><a href='/m21'>M21</a></li>
          <li><a href='/m22'>M22</a></li>
          <li><a href='/m22/m22b'>M22B</a></li>
          <li><a href='/m22/m22c'>M22C</a></li>
          <li><a href='/m22/m22d'>M22D</a></li>
          <li><a href='/m23'>M23</a></li>
          <li><a href='/m24'>M24</a></li>
          <li><a href='/m25'>M25</a></li>
          <li><a href='/m26'>M26</a></li>
          <li><a href='/m26/p02'>M26 - Animation</a></li>
          <li><a href='/m28'>M28</a></li>
          <li><a href='/m29'>M29</a></li>
          <li><a href='/m30'>M30</a></li>
          <li><a href='/m30/page02'>M30 - Page02</a></li>
          <li><a href='/m31'>M31</a></li>
          <li><a href='/m31/page02'>M31 - Page02</a></li>
          <li><a href='/m32'>M32</a></li>
          <li><a href='/m33'>M33</a></li>
          <li><a href='/m34'>M34</a></li>
          <li><a href='/m35'>M35</a></li>
          <li><a href='/m36'>M36</a></li>
          <li><a href='/m37'>M37</a></li>
          <li><a href='/m38'>M38</a></li>
          <li><a href='/m39'>M39</a></li>
          <li><a href='/m40'>M40</a></li>
          <li><a href='/m42'>M42</a></li>
        </ul>
      </div>
      <div className='main'>
        <Router>
          <Routes>
            <Route path='/' element={<M01 />} />
            <Route path='/m01p01' element={<M01Page1 />} />
            <Route path='/m02' element={<M02 />} />
            <Route path='/m02p1' element={<M02Page1 />} />
            <Route path='/m03' element={<M03 />} />
            <Route path='/m04' element={<M04 />} />
            <Route path='/m05' element={<M05 />} />
            <Route path='/m06' element={<M06 />} />
            <Route path='/m06a' element={<M06A />} />
            <Route path='/m07' element={<M07 />} />
            <Route path='/m08' element={<M08 />} />
            <Route path='/m09' element={<M09 />} />
            <Route path='/m09a' element={<M09A />} />
            <Route path='/m09b' element={<M09B />} />
            {/* <Route path='/m10' element={<M10 />} /> */}
            <Route path='/m10' element={<React.Suspense fallback='Loading'><LazyM10 /></React.Suspense>} />

            <Route path='/m11' element={<M11 />} >
              <Route index element={<M11H01 />} />
              <Route path="h02" element={<M11H02 />} />
              <Route path="h03" element={<M11H03 />} />
              <Route path="h04" element={<M11H04 />} />
              <Route path="h05" element={<M11H05 />} />
              <Route path="h06" element={<M11H06 />} />
              <Route path="h06a" element={<M11H06A />} />
              <Route path="h06b" element={<M11h06B />} />
              <Route path="h07" element={<M11H07 />} />
              <Route path="h08" element={<M11H08 />} />
              <Route path="h08a" element={<M11H08A />} />
              <Route path="h08b" element={<M11H08B />} />
              <Route path="h08c" element={<M11H08C />} />
              <Route path="h09" element={<M11H09 />} />
              <Route path="h10" element={<M11H10 />} />
            </Route>
            <Route path='/m12' element={<M12 />} />
            <Route path='/m13' element={<M13 />} />
            <Route path='/m14' element={<M14 />} />
            <Route path='/m15' element={<M15 />} />
            <Route path='/m16' element={<M16 />} />
            <Route path='/m17' element={<M17 />} />
            <Route path='/m18' element={<M18 />} />
            <Route path='/m19' element={<M19 />} />
            <Route path='/m20' element={<M20 />} />
            <Route path='/m21' element={<M21 />} />
            <Route path='/m22' element={<M22 />}>
              <Route index element={<M22A />} />
              <Route path='m22b' element={<M22B />} />
              <Route path='m22c' element={<M22C />} />
              <Route path='m22d' element={<M22D />} />
            </Route>
            <Route path='/m23' element={<M23 />} />
            <Route path='/m24' element={<M24 />} />
            <Route path='/m25' element={<M25 />} />
            <Route path='/m26' element={<M26 />}>
              <Route index element={<M26P01 />} />
              <Route path='/m26/p02' element={<M26P02 />} />
            </Route>
            <Route path='/m27' element={<M27 />}>
              <Route index element={<Page01 />} />
              <Route path='page02' element={<Page02 />} />
            </Route>
            <Route path='/m28' element={<M28 />}>
              <Route index element={<M28Page01 />} />
              <Route path='page02' element={<M28Page02 />} />
            </Route>
            <Route path='/m29' element={<M29 />} />
            <Route path='/m30' element={<M30 />}>
              <Route index element={<M30Page01 />} />
              <Route path='page02' element={<M30Page02 />} />
            </Route>
            <Route path='/m31' element={<M31 />}>
              <Route index element={<M31Page01 />} />
              <Route path='page02' element={<M31Page02 />} />
            </Route>
            <Route path='/m32' element={<M32 />} />
            <Route path='/m33' element={<M33 />} />
            <Route path='/m34' element={<M34 />} />
            <Route path='/m35' element={<M35 />} />
            <Route path='/m36' element={<M36 />} />
            <Route path='/m37' element={<M37 />} />
            <Route path='/m38' element={<M38 />} />
            <Route path='/m39/*' element={<M39 />} />
            <Route path='/m40' element={
              <StatusContextProvider>
                <M40 />
              </StatusContextProvider>
            } />
            <Route path='/m42' element={<M42 />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
