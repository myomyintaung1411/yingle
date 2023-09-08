// eslint-disable-next-line no-unused-vars
const UserName = "";
// eslint-disable-next-line no-unused-vars
const Id = "";
//var BASE_URL = "http://hn2216.com:3198/";
 var BASE_URL = "http://114.29.253.162:3198";
export default
  {
    optioner: {
      Agentid: '',
      Agentname: "",
      QQ: "",
      WX: "",
      PH: "",
      enable:"",
      androidAddr: "",
      iosAddr: "",
      customerAddr: "",
      downloadUrl:"",
      gameAddr: "",
      tAgent:""
    },


    myLoginInfo: {
      loginId: "",
      loginName: '',
      loginBalance: '',
      loginEnable: ''
    },

    registerurl: BASE_URL + 'regist',
    loginurl: BASE_URL + 'login',
    agentUrl: BASE_URL + 'getAgentInfo ',
    scrollData: BASE_URL + 'getBulletin',
    PaymentUrl: 'http://pay.hn885.com/index.php',
    PaymentCallbackUrl: BASE_URL + 'pay',
    Withdrawurl: 'http://wlzh.hn885.com/payment/xjw/draw',
    WithDrawCallbackUrl: BASE_URL + 'draw',

    // https://api.zf166.cc
    //sending oid partner to api data
    Oid_Partner: 'd9fce17200317431b1b43b27508224cf0294759a',
    // selectInfo: {
    //    selectAgent: "",
    //    selectItem: "",
    //    xmb_d:"",
    //    xmb_s:"",
    // },
    addPwStr: "$hn_ok$my_ok$hn_ok",
    en: {
      key: "r4dFa4#^&wqDcv#367$Xsj##",
      iv: '5245584201453654'
    },
    //not use
    // aes_jjw : {
    //   "key_hn" : "#4dFER#@&wqDcv#@67$jNLj#",
    //   "offset_hn" : "8975624324562108",
    //   "key_wf" : "r4dFa4#^&wqDcv#%67$Xsj*$",
    //   "offset_wf" :"5245584201453654",
    //   "curPlate" : "hn"
    // },
    gameEn: {
      key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
      iv: '1234567890123456'
    },
    listDataMember: {
      memberListData: [],
      totalMemberCount: 0
    },
    shanji: {
      memberListData: [],
      totalMemberCount: 0
    },
    //提醒聊天记录
    noticeMessage: [

    ],
    /**聊天记录 */
    chatRecord: [

    ],

  }
