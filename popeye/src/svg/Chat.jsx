import * as React from "react"
const Chat = ({size}) => (
        
    <svg className={`${size}`} strokeWidth="2.5" strokeLinecap="round"  strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M0 0 C4.46279226 2.15170341 7.2358803 4.90500786 10 9 C11.12774563 12.35607306 11.12679119 15.5335118 11.12939453 19.0559082 C11.13254669 20.28271805 11.13569885 21.50952789 11.13894653 22.77351379 C11.13715278 24.11593664 11.13510086 25.45835916 11.1328125 26.80078125 C11.13348772 28.19728105 11.13445956 29.59378074 11.13571167 30.99028015 C11.13718762 33.92997344 11.13504353 36.86963641 11.13037109 39.80932617 C11.12477271 43.50485769 11.12799025 47.20031569 11.13380432 50.89584446 C11.15170975 64.24316047 11.13479934 77.58391086 10.5703125 90.921875 C10.53366486 91.79761673 10.49701721 92.67335846 10.45925903 93.57563782 C8.87216767 125.99784424 -1.37671934 153.35396705 -24 177 C-24.59941406 177.66257812 -25.19882812 178.32515625 -25.81640625 179.0078125 C-48.78454943 203.51377952 -80.94489259 212.12576205 -113.4375 213.5625 C-114.38326904 213.60640869 -115.32903809 213.65031738 -116.3034668 213.69555664 C-123.39695719 213.99830228 -130.47225979 214.07097694 -137.57006836 213.87524414 C-144.65692505 213.7595371 -152.3131381 214.39826369 -158 219 C-159.61564272 221.19139904 -161.00224989 223.29100195 -162.375 225.625 C-162.78854736 226.30433594 -163.20209473 226.98367188 -163.62817383 227.68359375 C-166.37245582 232.20999928 -169.0485666 236.77698362 -171.73828125 241.3359375 C-172.39070801 242.43599121 -173.04313477 243.53604492 -173.71533203 244.66943359 C-175.00477692 246.84702795 -176.28606353 249.02947927 -177.55810547 251.21728516 C-185.22934584 264.20206292 -193.40891951 272.37949118 -208 277 C-219.91306616 279.84877669 -232.5697938 277.74855121 -242.98828125 271.3515625 C-243.65214844 270.90554688 -244.31601563 270.45953125 -245 270 C-245.59167969 269.61585938 -246.18335938 269.23171875 -246.79296875 268.8359375 C-256.79464924 261.37472963 -262.70036427 247.21355495 -268.6628418 236.54858398 C-274.81248996 224.12023978 -274.81248996 224.12023978 -285.06201172 215.84545898 C-289.66441641 214.68180972 -294.28244457 214.59815484 -299.0078125 214.47265625 C-300.98568029 214.40178205 -302.96354476 214.33081533 -304.94140625 214.25976562 C-308.00983279 214.160009 -311.07833303 214.06391381 -314.14697266 213.97094727 C-353.65925149 212.73196475 -384.91550408 204.96420423 -414 177 C-414.94939453 176.16275391 -414.94939453 176.16275391 -415.91796875 175.30859375 C-426.73197421 165.47067429 -438.80805235 147.60229455 -441.1875 133 C-441.29593074 128.63774807 -440.22008794 124.75118306 -438 121 C-434.0703515 117.17111172 -430.17510698 114.71671109 -424.625 114.6875 C-420.38376486 114.80569836 -417.56826743 115.56709039 -414 118 C-409.93620176 122.40079615 -407.32903248 126.90483753 -404.6875 132.25 C-401.12890154 139.18302906 -397.28983566 145.22646341 -392 151 C-391.33742188 151.75410156 -390.67484375 152.50820313 -389.9921875 153.28515625 C-370.46541859 174.28904237 -344.29253935 178.61438449 -317 180 C-310.54463524 180.2207313 -304.08762681 180.40328913 -297.62890625 180.48291016 C-282.09943095 180.81138568 -267.61979018 183.83848031 -255.9921875 194.765625 C-251.30453522 200.02314873 -247.69714864 206.03011227 -244 212 C-243.30471191 213.12051758 -242.60942383 214.24103516 -241.89306641 215.39550781 C-239.54136456 219.19364112 -237.20582209 223.00152654 -234.875 226.8125 C-234.2905864 227.76532364 -234.2905864 227.76532364 -233.69436646 228.73739624 C-232.58025615 230.55759265 -231.47267479 232.38158795 -230.3671875 234.20703125 C-229.71862793 235.2741333 -229.07006836 236.34123535 -228.40185547 237.44067383 C-227 240 -227 240 -227 242 C-222.25997088 243.96537793 -218.96927163 244.44560629 -214 243 C-210.40063091 239.13280062 -207.75090842 235.13717304 -205.14453125 230.52734375 C-204.43182797 229.28439777 -203.71893081 228.04156294 -203.00585938 226.79882812 C-201.91475518 224.88156402 -200.8266995 222.96267405 -199.74291992 221.04125977 C-190.55448511 204.79775811 -180.64066941 189.14451695 -162 183 C-154.75773055 181.38689945 -147.68118195 180.667004 -140.27734375 180.47265625 C-138.2532491 180.40186721 -136.22916075 180.33089786 -134.20507812 180.25976562 C-131.08156449 180.15952637 -127.95799109 180.06310453 -124.83422852 179.97094727 C-94.15044145 179.03524366 -67.76527387 174.00364134 -45.60546875 150.84375 C-29.73645775 132.61948433 -24.40991651 111.089671 -23.45703125 87.47265625 C-23.41487991 86.4478566 -23.37272858 85.42305695 -23.32929993 84.36720276 C-23.00095361 75.61968284 -22.89170534 66.87366136 -22.82421875 58.12109375 C-22.81225925 56.74598049 -22.80014326 55.37086858 -22.78787231 53.99575806 C-22.71414922 45.56109443 -22.71414922 45.56109443 -22.67407227 37.1262207 C-22.66396806 33.62289063 -22.63465551 30.12017072 -22.59275246 26.6170826 C-22.57469523 24.67240814 -22.57707169 22.72757774 -22.58000183 20.78282166 C-22.46340837 12.41660892 -21.64549367 7.55435633 -15.5 1.5625 C-10.3293922 -0.74580705 -5.57316335 -0.75788897 0 0 Z " fill="CurrentColor" transform="translate(475,208)"/>
        <path d="M0 0 C1.27142664 -0.00282738 2.54285328 -0.00565475 3.852808 -0.00856781 C9.86485712 -0.02187245 15.87688465 -0.03184727 21.88894576 -0.0357697 C28.7716715 -0.04029067 35.65420267 -0.05808356 42.53686923 -0.0867703 C48.55917726 -0.11098714 54.58139261 -0.11871235 60.60375404 -0.12044525 C63.1470682 -0.12346688 65.69038161 -0.13147881 68.23366356 -0.14463043 C71.76945517 -0.16165347 75.30476041 -0.15982289 78.84057617 -0.15332031 C79.88311554 -0.1625351 80.92565491 -0.17174988 81.99978638 -0.1812439 C89.05251071 -0.14054116 93.44826253 0.80839122 98.70703125 5.828125 C101.56871026 9.56034714 102.64013913 13.54724847 102.95703125 18.203125 C102.11552789 23.25214514 100.58023929 26.57991696 96.95703125 30.203125 C91.39254299 33.88808141 86.15682033 33.63797796 79.71704102 33.61962891 C78.59243469 33.62821426 77.46782837 33.63679962 76.30914307 33.64564514 C72.58884426 33.67074047 68.86881333 33.67509223 65.1484375 33.6796875 C62.54409484 33.69401248 59.93975971 33.70977216 57.33543396 33.72689819 C51.16525726 33.76541854 44.9951173 33.78962078 38.82485098 33.80802286 C27.18822002 33.84326522 15.55173252 33.90809377 3.91523552 33.97288132 C0.12761816 33.99167069 -3.65996878 34.00362306 -7.44761658 34.01431274 C-35.59211455 34.06274859 -35.59211455 34.06274859 -63.60546875 36.515625 C-64.60304199 36.64678711 -65.60061523 36.77794922 -66.62841797 36.91308594 C-84.86404901 39.45593844 -100.28229896 45.68114071 -114.04296875 58.203125 C-114.67589844 58.75484375 -115.30882812 59.3065625 -115.9609375 59.875 C-137.33710505 79.63694895 -140.49037971 109.1429682 -141.578125 136.57421875 C-141.6429306 138.19238747 -141.6429306 138.19238747 -141.70904541 139.84324646 C-142.00762657 147.88171717 -142.13240972 155.91355211 -142.18359375 163.95703125 C-142.20302292 166.25455816 -142.22255427 168.5520842 -142.2421875 170.84960938 C-142.27140743 174.34287724 -142.29297832 177.83545785 -142.29345703 181.32885742 C-142.29678643 184.78881714 -142.33120333 188.24732495 -142.37109375 191.70703125 C-142.36402405 192.74662491 -142.35695435 193.78621857 -142.34967041 194.85731506 C-142.46141835 201.52733006 -143.66931568 206.06094483 -148.04296875 211.203125 C-152.53670773 214.8340661 -156.57840683 214.70546594 -162.1640625 214.5546875 C-167.38272144 213.91740215 -169.9513006 211.41281133 -173.35546875 207.640625 C-175.77158782 204.15067523 -176.16993112 201.52282092 -176.18823242 197.38500977 C-176.1945166 196.39902298 -176.20080078 195.41303619 -176.20727539 194.39717102 C-176.20908813 192.78711433 -176.20908813 192.78711433 -176.2109375 191.14453125 C-176.21512695 190.02479416 -176.21931641 188.90505707 -176.22363281 187.75138855 C-176.23347292 184.0894323 -176.23341169 180.42759237 -176.23046875 176.765625 C-176.23019684 175.5226062 -176.22992493 174.2795874 -176.22964478 172.99890137 C-176.13035173 74.57963302 -176.13035173 74.57963302 -140.04296875 36.203125 C-139.51703125 35.61273438 -138.99109375 35.02234375 -138.44921875 34.4140625 C-119.49607731 14.01042554 -93.20352373 5.71392421 -66.35546875 2.453125 C-65.402771 2.33727051 -64.45007324 2.22141602 -63.46850586 2.10205078 C-42.4336775 -0.14746207 -21.12670832 0.0322801 0 0 Z " fill="CurrentColor" transform="translate(202.04296875,25.796875)"/>
        <path d="M0 0 C16.80511565 14.01553931 27.73516944 32.02994109 31.18994141 53.77197266 C31.30275186 55.10313607 31.3819121 56.43729861 31.43994141 57.77197266 C31.49150391 58.77228516 31.54306641 59.77259766 31.59619141 60.80322266 C32.20161148 83.20376527 25.04485479 103.0815111 9.61181641 119.49853516 C8.89509766 120.24876953 8.17837891 120.99900391 7.43994141 121.77197266 C6.61236328 122.71169922 6.61236328 122.71169922 5.76806641 123.67041016 C-5.69128105 136.20761703 -24.24017668 143.78567614 -41.00585938 144.94042969 C-64.59785911 145.99101436 -86.35425631 140.29369677 -104.24755859 124.14697266 C-119.08619012 110.21602338 -128.98289345 90.6881472 -129.79833984 70.18994141 C-130.2642338 48.48219495 -125.60093246 28.22668867 -110.56005859 11.77197266 C-109.77115234 10.89154297 -108.98224609 10.01111328 -108.16943359 9.10400391 C-80.42313179 -20.30545342 -32.44878268 -25.54262549 0 0 Z M-85.39990234 33.18994141 C-94.65621605 44.25399811 -97.81378707 57.60624166 -96.56005859 71.77197266 C-94.12981187 84.8455288 -87.45911965 96.06164618 -76.56005859 103.77197266 C-64.42433683 110.96054663 -52.80508794 113.83985054 -38.64990234 111.23681641 C-36.20925948 110.54649547 -33.90592161 109.73373468 -31.56005859 108.77197266 C-30.88845703 108.51673828 -30.21685547 108.26150391 -29.52490234 107.99853516 C-18.12584105 103.05818652 -9.03163948 92.39031947 -4.37255859 81.05322266 C0.28777619 67.96843653 -0.97148109 55.26033753 -6.68505859 42.64697266 C-12.7086786 31.47817722 -22.38909936 23.10628859 -34.37255859 18.89697266 C-53.56896168 13.3686799 -71.71513216 18.72442364 -85.39990234 33.18994141 Z " fill="CurretColor" transform="translate(454.56005859375,42.22802734375)"/>
    </svg>
)
export default Chat
