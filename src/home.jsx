import React from "react";
function Home() {
    function startKYC() {
  
        window.HyperSnapSDK.init(window.localStorage.getItem('jwtToken'), window.HyperSnapParams.Region.AsiaPacific);
        window.HyperSnapSDK.startUserSession();
        const hvDocConfig = new window.HVDocConfig();
        hvDocConfig.setOCRDetails('https://vnm-docs.hyperverge.co/v2/nationalID',                                                                hvDocConfig.DocumentSide.FRONT, {}, {});
        hvDocConfig.setShouldShowInstructionPage(true);
       
        const callback = (HVError, HVResponse) => {
              if (HVError) {
                var para = document.createElement('p');
                var node = document.createTextNode(JSON.stringify(HVError));
                para.appendChild(node);
                var element = document.getElementById('div1');
                element.appendChild(para);
              } else {
                var para = document.createElement('p');
                var node = document.createTextNode(JSON.stringify(HVResponse));
                para.appendChild(node);
                var element = document.getElementById('div1');
                element.appendChild(para);
              }
        };
        window.HVDocsModule.start(hvDocConfig, callback);
      }
  return (
    <div>
<button onClick={startKYC}>
  Say Hello
</button>
    </div>
  );
}

export default Home;
