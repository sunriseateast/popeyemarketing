import * as React from "react"
const Whatsapp = ({size}) => (
        
    <div className={`${size}`}>
        <svg strokeWidth="2.5" width="100%" height="100%" strokeLinecap="round"  strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 0 C0.57169922 0.50853516 1.14339844 1.01707031 1.73242188 1.54101562 C47.9647342 42.84048191 75.23721752 102.34494197 79 164 C81.29071521 229.6009931 60.02769926 292.15293165 15.1875 340.5625 C-4.48312117 361.4403045 -26.63647972 377.67034896 -52 391 C-52.6506543 391.34772461 -53.30130859 391.69544922 -53.97167969 392.05371094 C-75.5922878 403.47108514 -99.96460335 410.18506672 -124 414 C-124.74942871 414.12842285 -125.49885742 414.2568457 -126.27099609 414.38916016 C-163.27029769 420.58604482 -203.47360709 415.20282729 -238.6875 403.3125 C-240.10651611 402.83659424 -240.10651611 402.83659424 -241.55419922 402.35107422 C-246.51515546 400.58288838 -250.87702488 398.57045166 -255.31640625 395.7265625 C-263.62598587 390.54070708 -270.50436498 386.96514148 -280.44628906 389.1706543 C-283.23891002 389.91109963 -286.00021759 390.7387754 -288.765625 391.57421875 C-290.29221002 392.00533299 -291.81991626 392.43249372 -293.34863281 392.85598755 C-296.58032887 393.75446682 -299.8066014 394.66968736 -303.03039551 395.59609985 C-310.43949212 397.70904126 -317.90673106 399.5972196 -325.37038422 401.50620079 C-329.55292478 402.57869307 -333.73137694 403.66686907 -337.91015625 404.75390625 C-339.58478282 405.18902395 -341.25942478 405.62408242 -342.93408203 406.05908203 C-344.18260956 406.38344238 -344.18260956 406.38344238 -345.45635986 406.71435547 C-348.90120858 407.60906555 -352.3462687 408.50296025 -355.7913208 409.39688683 C-359.16139781 410.27151109 -362.53131352 411.14675551 -365.90118408 412.02217484 C-367.48295637 412.43298991 -369.06478237 412.8435983 -370.64666748 413.25397873 C-372.84404036 413.82410977 -375.04119039 414.39509182 -377.23828125 414.96630859 C-377.91836243 415.14264517 -378.5984436 415.31898174 -379.2991333 415.50066185 C-384.14969894 416.76333894 -388.97633505 418.09951576 -393.78979492 419.49673462 C-396 420 -396 420 -400 420 C-397.39384629 409.42779894 -394.66533094 398.89689669 -391.8046875 388.390625 C-391.4109723 386.94055471 -391.01736447 385.49045527 -390.62385559 384.04032898 C-389.79888755 381.00146899 -388.97285201 377.96290178 -388.14608765 374.92453003 C-387.07821614 370.99923734 -386.01370347 367.07304256 -384.95017529 363.14657116 C-377.33024052 335.0195463 -377.33024052 335.0195463 -373.45703125 321.57421875 C-373.20945068 320.70948944 -372.96187012 319.84476013 -372.70678711 318.9538269 C-371.62912569 315.19190258 -370.53808905 311.43529596 -369.41552734 307.68652344 C-369.05539551 306.43774414 -368.69526367 305.18896484 -368.32421875 303.90234375 C-367.8614856 302.34761353 -367.8614856 302.34761353 -367.3894043 300.76147461 C-366.92157319 297.44383344 -367.50281155 295.96317309 -369 293 C-369.55723755 291.8231665 -369.55723755 291.8231665 -370.12573242 290.62255859 C-370.53154541 289.80609863 -370.9373584 288.98963867 -371.35546875 288.1484375 C-401.34106702 227.16655023 -405.94749477 160.37269218 -384.03515625 95.90917969 C-381.47543037 88.71538403 -378.40635163 81.82872288 -375 75 C-374.57283691 74.14003418 -374.14567383 73.28006836 -373.70556641 72.39404297 C-368.41358786 61.83077972 -362.9611883 51.56989012 -356 42 C-355.30519531 41.03320312 -354.61039062 40.06640625 -353.89453125 39.0703125 C-339.26727106 19.13581631 -322.1434346 0.45818298 -302 -14 C-300.96101563 -14.76054688 -299.92203125 -15.52109375 -298.8515625 -16.3046875 C-265.02788669 -40.44059444 -225.41621793 -55.88707305 -184 -60 C-182.90429688 -60.11085938 -181.80859375 -60.22171875 -180.6796875 -60.3359375 C-114.53492933 -66.01425781 -49.35716545 -44.10283527 0 0 Z M-307.125 46.25 C-340.8466761 84.45296197 -359.97554054 136.22386492 -356.859375 187.30517578 C-354.61425236 220.10820342 -345.98475125 255.76803254 -326.58349609 282.98730469 C-326.11637207 283.64891602 -325.64924805 284.31052734 -325.16796875 284.9921875 C-324.51284302 285.86012939 -324.51284302 285.86012939 -323.84448242 286.74560547 C-321.11254926 294.0386586 -325.81690106 304.11990278 -327.81640625 311.23828125 C-328.19672171 312.60954938 -328.57642651 313.980987 -328.95555115 315.35258484 C-329.94876438 318.94146703 -330.94799401 322.52864096 -331.94921875 326.11529541 C-333.55613264 331.87239066 -335.1575322 337.63099442 -336.75184441 343.39159203 C-337.30911019 345.39949262 -337.87124567 347.40598616 -338.43373108 349.41242981 C-338.77085617 350.6276683 -339.10798126 351.8429068 -339.45532227 353.0949707 C-339.75430923 354.16560257 -340.0532962 355.23623444 -340.36134338 356.33930969 C-341.11670219 359.03014544 -341.11670219 359.03014544 -341 362 C-332.41787663 360.61937572 -324.10762976 358.54176538 -315.72265625 356.26953125 C-314.38049999 355.9106163 -313.03816539 355.55236771 -311.69566345 355.19474792 C-306.04776751 353.68936643 -300.40234248 352.17492968 -294.75952148 350.65063477 C-291.28659087 349.71297495 -287.81127278 348.78466293 -284.33428764 347.86215782 C-283.0164357 347.51049302 -281.6995378 347.15523208 -280.38365364 346.79627419 C-278.55118203 346.2965976 -276.71522794 345.80974564 -274.87915039 345.32348633 C-273.83755264 345.04305984 -272.7959549 344.76263336 -271.72279358 344.47370911 C-267.3539719 343.71362555 -264.72764508 344.99863398 -261.0078125 347.1875 C-213.91598646 374.32275884 -160.56205924 382.07820188 -107.73583984 368.54003906 C-75.18711316 359.66846437 -46.25959722 342.1991133 -22 319 C-21.07316406 318.12601562 -20.14632813 317.25203125 -19.19140625 316.3515625 C-12.03952513 309.43300516 -5.86856916 302.01027207 0 294 C0.41604492 293.43361816 0.83208984 292.86723633 1.26074219 292.28369141 C32.15282671 249.5957792 43.15147765 197.01249107 35.54345703 145.29003906 C30.75033658 116.27292708 19.42037906 87.77966307 2 64 C1.24332031 62.95972656 0.48664063 61.91945313 -0.29296875 60.84765625 C-5.93296715 53.24177392 -12.12293686 46.23488308 -18.66601562 39.39697266 C-19.80358673 38.20568754 -20.92678224 37.00070236 -22.046875 35.79296875 C-56.11266996 0.0530001 -106.65646771 -17.86166427 -155 -20 C-213.79760094 -21.27443076 -267.12330015 4.12260595 -307.125 46.25 Z " fill="currentColor" transform="translate(417,76)"/>
            <path d="M0 0 C1.02963867 -0.01836914 1.02963867 -0.01836914 2.08007812 -0.03710938 C6.75762218 -0.05038528 10.80593611 0.37783633 15.1875 2.1875 C20.0330937 7.04483466 22.27825434 12.45405111 24.796875 18.765625 C25.20915344 19.77341003 25.62143188 20.78119507 26.04620361 21.81951904 C27.35354998 25.02145337 28.64581162 28.22922144 29.9375 31.4375 C30.82059921 33.60978805 31.70470337 35.78166786 32.58984375 37.953125 C34.52925999 42.71194878 36.45879596 47.47465261 38.37957764 52.24102783 C38.93428194 53.57743903 39.54040004 54.89330009 40.1875 56.1875 C41.24654007 61.1130354 40.88496232 64.88277834 38.49609375 69.3515625 C34.05902963 75.81810117 29.14324141 81.77081108 23.83984375 87.5546875 C21.63128078 91.07376893 21.6348026 93.09129908 22.1875 97.1875 C23.72324168 100.53948839 23.72324168 100.53948839 26 103.75 C26.40089844 104.3471582 26.80179687 104.94431641 27.21484375 105.55957031 C46.53855591 133.87829265 72.61412996 157.21312875 105.1875 169.1875 C109.18796295 169.55248822 110.59149226 169.57159387 114 167.375 C119.66013183 162.12651412 124.25231328 155.73580956 128.91796875 149.6171875 C129.36946289 149.02550781 129.82095703 148.43382812 130.28613281 147.82421875 C131.16624758 146.66613922 132.04204032 145.50475995 132.91308594 144.33984375 C135.97080006 140.29584997 135.97080006 140.29584997 138.1875 139.1875 C147.75561154 138.4246753 156.08090673 143.57532617 164.3125 147.75 C165.72063751 148.45001119 167.12948911 149.1485878 168.5390625 149.84570312 C172.04915741 151.58593877 175.54886029 153.34605736 179.04650879 155.11114502 C181.26139901 156.22465175 183.4810114 157.32821024 185.70214844 158.42919922 C186.43231171 158.79174301 187.16247498 159.1542868 187.9147644 159.52781677 C189.30690973 160.21872753 190.69971847 160.90830371 192.09329224 161.59632874 C194.91826779 163.00171755 197.55744976 164.43413318 200.1875 166.1875 C203.51479749 176.16939246 200.24129794 189.3399964 196 198.625 C188.59676164 211.89371208 173.7213563 219.90722019 159.625 224.296875 C143.44123253 228.12282026 125.65134938 225.61646987 110.1875 220.1875 C109.37039551 219.90874023 108.55329102 219.62998047 107.71142578 219.34277344 C86.47273113 212.00170501 66.34207492 202.48543704 48.1875 189.1875 C47.56584961 188.73407227 46.94419922 188.28064453 46.30371094 187.81347656 C36.60815918 180.6581071 27.84445655 172.55091747 19.1875 164.1875 C18.66494629 163.68686035 18.14239258 163.1862207 17.60400391 162.67041016 C10.90852855 156.23810448 4.9594282 149.44929415 -0.8125 142.1875 C-2.22897599 140.49983994 -3.64564679 138.81234337 -5.0625 137.125 C-24.97839325 112.65590952 -44.07174332 84.11319358 -41.8125 51.1875 C-39.97311711 33.39465758 -32.50664041 18.77077456 -19.8125 6.1875 C-13.40768545 1.04440184 -8.0201669 0.00740551 0 0 Z " fill="currentColor" transform="translate(177.8125,142.8125)"/>
        </svg>
    </div>
    
)
export default Whatsapp
