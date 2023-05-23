
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default function App() {
  const roomID = "SajiloDoctor";

  const handleRef = async (element) => {
    // generate Kit Token
    const appID = 623996694;
    const serverSecret = "ddae3517c418d1af9d067f6c0c3e0844";
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "Rojan");

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // const notificationMessage = `${newdoctor.firstName} ${newdoctor.lastName} has joined the meeting. Click here to view the meeting: http://localhost:3000/online?roomID=${roomID}`;
    // const notificationData = {
    //   doctorId: newdoctor._id,
    //   name: newdoctor.firstName + " " + newdoctor.lastName,
    // };
    // const notificationOnClickPath = "/doctor/notifications";

    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url: window.location.protocol + '//' + 
            window.location.host + window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  return (
    <div
      ref={handleRef}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}


