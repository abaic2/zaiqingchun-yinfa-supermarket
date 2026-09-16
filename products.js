// 产品及价格以 2026-09-16 提供的《再青春产品分类图册》为准。
const PRODUCTS = [
  {
    "id": 0,
    "name": "挂脖式助听器",
    "category": "助听器系列",
    "price": 498,
    "image": "assets/p00.jpg?v=20260916",
    "description": "挂脖式设计，双耳耳塞与颈圈连接，操控按键设在颈圈上，便于日常佩戴与操作。"
  },
  {
    "id": 1,
    "name": "福声充电式助听器",
    "category": "助听器系列",
    "price": 498,
    "image": "assets/p01.jpg?v=20260916",
    "description": "福声充电式助听器，耳背式机身搭配导声管，适合希望采用充电方式的顾客了解选配。"
  },
  {
    "id": 76,
    "name": "双弯助行器",
    "category": "助行器系列",
    "price": 138,
    "image": "assets/p76.jpg?v=20260916",
    "description": "双层弯管扶手结构，前轮搭配后脚支撑，便于在不同握持高度提供辅助支撑。可到店了解高度调节与使用方式。"
  },
  {
    "id": 2,
    "name": "坐坐小拉车",
    "category": "助行器系列",
    "price": 528,
    "image": "assets/p02.jpg?v=20260916",
    "description": "将购物袋与休息座位结合的小拉车，带提拉扶手和滚轮，方便日常买菜、携带随身物品。"
  },
  {
    "id": 3,
    "name": "带轮带坐助行器",
    "category": "助行器系列",
    "price": 258,
    "image": "assets/p03.jpg?v=20260916",
    "description": "带前轮、扶手及座板的助行器，将行走辅助与临时休息座位结合。"
  },
  {
    "id": 4,
    "name": "德国瑞森助步车",
    "category": "助行器系列",
    "price": 2080,
    "image": "assets/p04.jpg?v=20260916",
    "description": "德国瑞森 GEMINO 20 助步车，四轮结构，配有手刹、座位和置物袋，便于扶行及携物。"
  },
  {
    "id": 5,
    "name": "德国瑞森帕金森病人助步器",
    "category": "助行器系列",
    "price": 3980,
    "image": "assets/p05.jpg?v=20260916",
    "description": "德国瑞森 GEMINO 30 助步器，配有手刹、座位和前置物袋。"
  },
  {
    "id": 6,
    "name": "扶扶小推车",
    "category": "助行器系列",
    "price": 529,
    "image": "assets/p06.jpg?v=20260916",
    "description": "扶扶品牌小推车，直立式扶手搭配四轮底架与储物袋，可用于日常购物携物。"
  },
  {
    "id": 77,
    "name": "全自动双水平睡眠呼吸机",
    "category": "呼吸机系列",
    "price": 3280,
    "image": "assets/p77.jpg?v=20260916",
    "description": "全自动双水平睡眠呼吸设备，台式机身配有显示屏、旋钮与湿化水盒。具体型号、模式及配套面罩可联系门店了解。"
  },
  {
    "id": 78,
    "name": "双水平ST无创呼吸机",
    "category": "呼吸机系列",
    "price": 3480,
    "image": "assets/p78.jpg?v=20260916",
    "description": "双水平 ST 型无创呼吸设备，机身设显示屏、旋钮和管路接口，配有湿化水盒。具体配置与适配要求可联系门店了解。"
  },
  {
    "id": 79,
    "name": "瑞思迈睡眠机",
    "category": "呼吸机系列",
    "price": 6500,
    "image": "assets/p79.jpg?v=20260916",
    "description": "瑞思迈品牌睡眠呼吸设备，配有显示屏、旋钮和侧置湿化水盒。具体型号、面罩及管路配置可联系门店了解。"
  },
  {
    "id": 80,
    "name": "肺病机",
    "category": "呼吸机系列",
    "price": 3380,
    "image": "assets/p80.jpg?v=20260916",
    "description": "呼吸设备，前面板设显示区和控制旋钮，侧置透明湿化水盒。具体型号、工作模式及配套用品可联系门店了解。"
  },
  {
    "id": 81,
    "name": "鼾症呼吸机",
    "category": "呼吸机系列",
    "price": 1890,
    "image": "assets/p81.jpg?v=20260916",
    "description": "睡眠呼吸设备，机身配有显示区、旋钮和湿化水盒。具体型号、面罩及适配要求可联系门店了解。"
  },
  {
    "id": 7,
    "name": "医用护腕固定带",
    "category": "固定带系列",
    "price": 85,
    "image": "assets/p07.jpg?v=20260916",
    "description": "护腕加强型固定带，以包裹式绑带配合支撑结构固定腕部，可调节松紧。"
  },
  {
    "id": 8,
    "name": "医用护膝固定带",
    "category": "固定带系列",
    "price": 98,
    "image": "assets/p08.jpg?v=20260916",
    "description": "膝部包裹式固定带，带有多条固定绑带，便于调节贴合度，为膝部提供支撑。"
  },
  {
    "id": 9,
    "name": "医用胸背固定带",
    "category": "固定带系列",
    "price": 138,
    "image": "assets/p09.jpg?v=20260916",
    "description": "穿戴式胸背固定带，背部支撑结构搭配肩带与腰部固定带，用于胸背部支撑固定。"
  },
  {
    "id": 10,
    "name": "医用腹部固定带",
    "category": "固定带系列",
    "price": 59,
    "image": "assets/p10.jpg?v=20260916",
    "description": "围裹式腹部固定带，采用宽幅带体和贴合式固定设计，方便按体型调整松紧。"
  },
  {
    "id": 82,
    "name": "胸肋固定带",
    "category": "固定带系列",
    "price": 85,
    "image": "assets/p82.jpg?v=20260916",
    "description": "胸肋部围裹式固定带，宽幅带体配合双肩带，为胸肋部提供包裹和支撑，便于调节佩戴位置。"
  },
  {
    "id": 11,
    "name": "5升煎药壶",
    "category": "家用系列",
    "price": 138,
    "image": "assets/p11.jpg?v=20260916",
    "description": "5 升容量煎药壶，带壶盖、提手及壶身控制区，配有防干烧设计。"
  },
  {
    "id": 83,
    "name": "坐浴盆",
    "category": "家用系列",
    "price": 35,
    "image": "assets/p83.jpg?v=20260916",
    "description": "坐式盆体搭配软管，可放置于适配的坐便器上，便于坐姿清洁护理。购买时可核对盆体尺寸与坐便器的适配情况。"
  },
  {
    "id": 12,
    "name": "多功能防褥疮气垫",
    "category": "家用系列",
    "price": 580,
    "image": "assets/p12.jpg?v=20260916",
    "description": "多功能充气床垫，配有气泵及管路，可铺设在护理床上。"
  },
  {
    "id": 84,
    "name": "方形气垫",
    "category": "家用系列",
    "price": 35,
    "image": "assets/p84.jpg?v=20260916",
    "description": "方形充气垫，表面设有多个圆形孔位，可用于座面垫衬，便于按使用位置摆放。"
  },
  {
    "id": 13,
    "name": "空气波",
    "category": "家用系列",
    "price": 138,
    "image": "assets/p13.jpg?v=20260916",
    "description": "包裹式按摩护具，液晶触控面板，并标注可用于膝、肩、肘部的热敷与震动按摩。"
  },
  {
    "id": 85,
    "name": "翻身垫",
    "category": "家用系列",
    "price": 85,
    "image": "assets/p85.jpg?v=20260916",
    "description": "弧形护理垫，设双腿承托位置，便于照护人员协助调整卧床者的翻身和侧卧姿势。"
  },
  {
    "id": 14,
    "name": "褥疮垫0型",
    "category": "家用系列",
    "price": 35,
    "image": "assets/p14.jpg?v=20260916",
    "description": "O 型环状坐垫，中空结构，便于日常坐卧护理时进行垫衬。"
  },
  {
    "id": 15,
    "name": "防褥疮气垫",
    "category": "家用系列",
    "price": 358,
    "image": "assets/p15.jpg?v=20260916",
    "description": "名怡防褥疮气垫，条状充气垫体用于卧床护理时铺设垫衬。气泵、管路及具体规格可联系门店了解。"
  },
  {
    "id": 16,
    "name": "单摇床",
    "category": "护理床系列",
    "price": 799,
    "image": "assets/p16.jpg?v=20260916",
    "description": "单摇式护理床，床头可抬起，配有床侧护栏和脚轮，便于日常照护。"
  },
  {
    "id": 17,
    "name": "双摇床",
    "category": "护理床系列",
    "price": 1299,
    "image": "assets/p17.jpg?v=20260916",
    "description": "双摇式护理床，配有床侧护栏、脚轮和餐桌板。"
  },
  {
    "id": 18,
    "name": "多功能护理床",
    "category": "护理床系列",
    "price": 1899,
    "image": "assets/p18.jpg?v=20260916",
    "description": "多功能护理床，具有可调床面、床侧护栏及脚轮，适合根据家庭照护空间选择配置。"
  },
  {
    "id": 19,
    "name": "台式红外线治疗器",
    "category": "按摩理疗系列",
    "price": 198,
    "image": "assets/p19.jpg?v=20260916",
    "description": "台式红外线治疗器，采用底座和可调支架。"
  },
  {
    "id": 20,
    "name": "天翔热灸颈肩康",
    "category": "按摩理疗系列",
    "price": 69,
    "image": "assets/p20.jpg?v=20260916",
    "description": "天翔颈肩部热灸护理用品，围裹式外形，配有热敷与揉捏按摩功能。"
  },
  {
    "id": 21,
    "name": "康祝真空拔罐器24支",
    "category": "按摩理疗系列",
    "price": 98,
    "image": "assets/p21.jpg?v=20260916",
    "description": "康祝真空拔罐器 24 支装，包含不同规格罐体及抽气工具，便于按需求选择罐体。"
  },
  {
    "id": 22,
    "name": "护眼仪",
    "category": "按摩理疗系列",
    "price": 398,
    "image": "assets/p22.jpg?v=20260916",
    "description": "眼罩式护眼仪，包覆式外形，适合了解眼部放松用品。"
  },
  {
    "id": 23,
    "name": "智能弯头按摩器",
    "category": "按摩理疗系列",
    "price": 138,
    "image": "assets/p23.jpg?v=20260916",
    "description": "型号 XR-2010A，弯头式握持设计，可将按摩头靠近肩背等部位，便于手持操作。"
  },
  {
    "id": 24,
    "name": "特定电磁波谱治疗器台式",
    "category": "按摩理疗系列",
    "price": 198,
    "image": "assets/p24.jpg?v=20260916",
    "description": "台式特定电磁波谱治疗器，型号 TDP-T1，底座搭配可调支架与照射头。"
  },
  {
    "id": 25,
    "name": "石墨烯远红外发热腰围",
    "category": "按摩理疗系列",
    "price": 218,
    "image": "assets/p25.jpg?v=20260916",
    "description": "腰围式发热护具，配有石墨烯远红外发热设计，腰部围裹佩戴并配有控制区。"
  },
  {
    "id": 26,
    "name": "立式红外线治疗器",
    "category": "按摩理疗系列",
    "price": 298,
    "image": "assets/p26.jpg?v=20260916",
    "description": "立式红外线治疗器，带落地支架及滚轮底座，便于根据使用位置调整摆放。"
  },
  {
    "id": 27,
    "name": "筋膜枪",
    "category": "按摩理疗系列",
    "price": 228,
    "image": "assets/p27.jpg?v=20260916",
    "description": "手持式筋膜枪，配有多种按摩头及收纳箱。"
  },
  {
    "id": 86,
    "name": "肩颈揉捏按摩仪",
    "category": "按摩理疗系列",
    "price": 168,
    "image": "assets/p86.jpg?v=20260916",
    "description": "型号 QY-8813A，肩颈披搭式按摩仪，配有下垂拉带和侧面控制按键，方便调整握持与贴合位置。"
  },
  {
    "id": 28,
    "name": "远红外养生发热马甲",
    "category": "按摩理疗系列",
    "price": 298,
    "image": "assets/p28.jpg?v=20260916",
    "description": "马甲式发热用品，穿戴式外形，前开襟款式。"
  },
  {
    "id": 87,
    "name": "远红外坐垫",
    "category": "按摩理疗系列",
    "price": 188,
    "image": "assets/p87.jpg?v=20260916",
    "description": "远红外坐垫，平面垫体搭配连线控制器，可铺放于座椅上。图册展示多种配色，可到店选择款式。"
  },
  {
    "id": 88,
    "name": "远红外护腰",
    "category": "按摩理疗系列",
    "price": 188,
    "image": "assets/p88.jpg?v=20260916",
    "description": "远红外腰部护理用品，垫体配有连线部件，可贴合腰背部使用。款式、尺寸与供电方式可联系门店了解。"
  },
  {
    "id": 89,
    "name": "远红外盖毯",
    "category": "按摩理疗系列",
    "price": 298,
    "image": "assets/p89.jpg?v=20260916",
    "description": "远红外盖毯，可用于日常坐卧时覆盖身体，图册展示折叠毯体与手提包装。具体尺寸和款式可到店了解。"
  },
  {
    "id": 29,
    "name": "遇京电磁波治疗器立式",
    "category": "按摩理疗系列",
    "price": 328,
    "image": "assets/p29.jpg?v=20260916",
    "description": "遇京立式电磁波治疗器，带可调支架及滚轮底座，适合了解落地式理疗设备的顾客。"
  },
  {
    "id": 30,
    "name": "锗石海盐热敷包",
    "category": "按摩理疗系列",
    "price": 118,
    "image": "assets/p30.jpg?v=20260916",
    "description": "长方形热敷包，带提手与表面控制区，配有锗石海盐款。"
  },
  {
    "id": 31,
    "name": "青扬颈肩按摩仪",
    "category": "按摩理疗系列",
    "price": 128,
    "image": "assets/p31.jpg?v=20260916",
    "description": "青扬 QY-8826S 颈肩按摩仪，肩部披搭式设计，带固定带和控制按键。"
  },
  {
    "id": 32,
    "name": "颈肩按摩仪",
    "category": "按摩理疗系列",
    "price": 298,
    "image": "assets/p32.jpg?v=20260916",
    "description": "颈肩部佩戴式按摩仪，配有 2 种模式、3 档力度及热敷功能。"
  },
  {
    "id": 33,
    "name": "低胸腰椎双气囊",
    "category": "支具系列",
    "price": 590,
    "image": "assets/p33.jpg?v=20260916",
    "description": "低胸腰椎支具，配有双气囊与充气部件，硬质支撑结构配合肩带和腰部固定带，提供胸腰部支撑。"
  },
  {
    "id": 34,
    "name": "前臂吊带",
    "category": "支具系列",
    "price": 35,
    "image": "assets/p34.jpg?v=20260916",
    "description": "前臂托兜搭配肩颈吊带，包托前臂并调节悬吊位置，用于上肢支撑固定。"
  },
  {
    "id": 36,
    "name": "可调短款膝关节支具",
    "category": "支具系列",
    "price": 219,
    "image": "assets/p36.jpg?v=20260916",
    "description": "短款膝关节支具，侧面带角度调节结构，配合多条绑带固定膝部。"
  },
  {
    "id": 37,
    "name": "可调肘关节支具",
    "category": "支具系列",
    "price": 398,
    "image": "assets/p37.jpg?v=20260916",
    "description": "肘关节支具，带角度调节结构及上、前臂固定带，配有悬吊肩带。"
  },
  {
    "id": 38,
    "name": "可调膝关节支具",
    "category": "支具系列",
    "price": 428,
    "image": "assets/p38.jpg?v=20260916",
    "description": "膝关节支具，较长的腿部支撑结构搭配角度调节部件与多条固定绑带。"
  },
  {
    "id": 39,
    "name": "约束手套",
    "category": "支具系列",
    "price": 19,
    "image": "assets/p39.jpg?v=20260916",
    "description": "护理用手套，采用网面包覆结构和腕部固定带。"
  },
  {
    "id": 40,
    "name": "肋骨固定带",
    "category": "支具系列",
    "price": 35,
    "image": "assets/p40.jpg?v=20260916",
    "description": "肋骨固定带，围裹胸部并配有肩带，前部为宽幅固定面。"
  },
  {
    "id": 41,
    "name": "肩外展支具",
    "category": "支具系列",
    "price": 450,
    "image": "assets/p41.jpg?v=20260916",
    "description": "肩外展支具，支撑托架搭配躯干固定结构，用于保持上肢位置。"
  },
  {
    "id": 42,
    "name": "肩外展枕",
    "category": "支具系列",
    "price": 149,
    "image": "assets/p42.jpg?v=20260916",
    "description": "肩外展枕，垫枕承托前臂，配有上肢固定带和肩带，用于肩部支撑固定。"
  },
  {
    "id": 43,
    "name": "肩托",
    "category": "支具系列",
    "price": 58,
    "image": "assets/p43.jpg?v=20260916",
    "description": "肩部托带，采用跨肩固定结构并包托上臂，便于肩部支撑佩戴。"
  },
  {
    "id": 44,
    "name": "肩托带气囊",
    "category": "支具系列",
    "price": 78,
    "image": "assets/p44.jpg?v=20260916",
    "description": "带气囊款肩托，跨肩带与上臂托套相结合。"
  },
  {
    "id": 45,
    "name": "踝关节固定带",
    "category": "支具系列",
    "price": 95,
    "image": "assets/p45.jpg?v=20260916",
    "description": "踝关节固定带，围裹踝部并采用交叉固定带，便于调整足踝贴合度。"
  },
  {
    "id": 46,
    "name": "踝足支具",
    "category": "支具系列",
    "price": 128,
    "image": "assets/p46.jpg?v=20260916",
    "description": "踝足支具，硬质外壳配合内衬与固定绑带，覆盖足部及踝部。"
  },
  {
    "id": 47,
    "name": "踝足支具长款",
    "category": "支具系列",
    "price": 158,
    "image": "assets/p47.jpg?v=20260916",
    "description": "长款踝足支具，相较短款具有更高的小腿覆盖范围，配有多条固定带。"
  },
  {
    "id": 48,
    "name": "迈乐星颈托",
    "category": "支具系列",
    "price": 48,
    "image": "assets/p48.jpg?v=20260916",
    "description": "迈乐星颈托，采用前开孔支撑结构，围绕颈部佩戴，用于颈部支撑固定。"
  },
  {
    "id": 49,
    "name": "遇京加宽护腰",
    "category": "支具系列",
    "price": 158,
    "image": "assets/p49.jpg?v=20260916",
    "description": "遇京加宽护腰，宽幅腰带配合多重固定带，用于腰部包裹和支撑。"
  },
  {
    "id": 50,
    "name": "遇京护肘",
    "category": "支具系列",
    "price": 35,
    "image": "assets/p50.jpg?v=20260916",
    "description": "遇京护肘，套筒式织物外形，覆盖肘部周围，便于日常佩戴。"
  },
  {
    "id": 51,
    "name": "遇京护腕",
    "category": "支具系列",
    "price": 30,
    "image": "assets/p51.jpg?v=20260916",
    "description": "遇京护腕，套筒式织物外形，包裹腕部。"
  },
  {
    "id": 52,
    "name": "遇京护踝",
    "category": "支具系列",
    "price": 35,
    "image": "assets/p52.jpg?v=20260916",
    "description": "遇京护踝，足跟开口式设计，织物结构围裹足踝，便于贴合佩戴。"
  },
  {
    "id": 53,
    "name": "高胸腰椎单气囊",
    "category": "支具系列",
    "price": 620,
    "image": "assets/p53.jpg?v=20260916",
    "description": "高胸腰椎支具，配有单气囊与充气部件，较高的胸部支撑结构搭配肩带和腰部固定带。"
  },
  {
    "id": 35,
    "name": "高胸腰椎双气囊",
    "category": "支具系列",
    "price": 690,
    "image": "assets/p35.jpg?v=20260916",
    "description": "高胸腰椎支具，配有双气囊与两组充气部件，胸腰部硬质支撑结构搭配肩带和腰部固定带。"
  },
  {
    "id": 54,
    "name": "友倍康血压计",
    "category": "血压计系列",
    "price": 118,
    "image": "assets/p54.jpg?v=20260916",
    "description": "友倍康上臂式电子血压计，配有袖带、显示屏和操作按键，便于查看测量读数。"
  },
  {
    "id": 55,
    "name": "双模式血压计",
    "category": "血压计系列",
    "price": 298,
    "image": "assets/p55.jpg?v=20260916",
    "description": "双模式血压计，台式与竖屏外形，大数字显示区便于读数。"
  },
  {
    "id": 56,
    "name": "欧姆龙HEM-7121血压计",
    "category": "血压计系列",
    "price": 238,
    "image": "assets/p56.jpg?v=20260916",
    "description": "欧姆龙 HEM-7121 电子血压计，显示区可查看血压与脉搏读数，正面设启动／停止按键。"
  },
  {
    "id": 57,
    "name": "欧姆龙HEM-8102K血压计",
    "category": "血压计系列",
    "price": 238,
    "image": "assets/p57.jpg?v=20260916",
    "description": "欧姆龙 HEM-8102K 电子血压计，正面显示高压、低压与脉搏，带启动／停止按键。"
  },
  {
    "id": 58,
    "name": "欧姆龙J7136血压计",
    "category": "血压计系列",
    "price": 368,
    "image": "assets/p58.jpg?v=20260916",
    "description": "欧姆龙 J7136 电子血压计，搭配袖带，面板带显示屏与多个功能按键。"
  },
  {
    "id": 59,
    "name": "鱼跃臂式电子血压计",
    "category": "血压计系列",
    "price": 498,
    "image": "assets/p59.jpg?v=20260916",
    "description": "鱼跃臂式电子血压计，型号 YE630CR，机身结合臂部袖带，设数字显示区。"
  },
  {
    "id": 60,
    "name": "鱼跃血压计",
    "category": "血压计系列",
    "price": 208,
    "image": "assets/p60.jpg?v=20260916",
    "description": "鱼跃 YE655D 血压计，配有上臂袖带和背光显示屏，便于查看测量数值。"
  },
  {
    "id": 90,
    "name": "三诺安健血糖仪一套",
    "category": "血糖仪系列",
    "price": 80,
    "image": "assets/p90.jpg?v=20260916",
    "description": "三诺安健血糖仪套装，包含带数字显示屏的仪器及配套检测用品。试纸规格与套装数量可联系门店核对。"
  },
  {
    "id": 61,
    "name": "免调码血糖仪一套",
    "category": "血糖仪系列",
    "price": 80,
    "image": "assets/p61.jpg?v=20260916",
    "description": "三诺安稳免调码血糖仪套装，仪器配有数字显示屏及操作按键，搭配配套检测用品。"
  },
  {
    "id": 62,
    "name": "安稳+血糖仪一套",
    "category": "血糖仪系列",
    "price": 80,
    "image": "assets/p62.jpg?v=20260916",
    "description": "三诺安稳+血糖仪套装，含血糖仪及配套用品。"
  },
  {
    "id": 63,
    "name": "安稳型血糖仪一套",
    "category": "血糖仪系列",
    "price": 75,
    "image": "assets/p63.jpg?v=20260916",
    "description": "三诺安稳型血糖仪套装，采用蓝白色仪器与配套用品。"
  },
  {
    "id": 64,
    "name": "20A电动轮椅",
    "category": "轮椅系列",
    "price": 2800,
    "image": "assets/p64.jpg?v=20260916",
    "description": "20A 电动轮椅，配有扶手操控器、脚踏和靠背。"
  },
  {
    "id": 91,
    "name": "一体轮轮椅",
    "category": "轮椅系列",
    "price": 388,
    "image": "assets/p91.jpg?v=20260916",
    "description": "一体轮款手动轮椅，橙黑色座靠垫搭配大后轮、前轮、扶手和脚踏，便于日常乘坐与陪护推行。"
  },
  {
    "id": 65,
    "name": "凤凰高靠背轮椅",
    "category": "轮椅系列",
    "price": 988,
    "image": "assets/p65.jpg?v=20260916",
    "description": "凤凰高靠背轮椅，配有全躺、半躺、餐桌及坐便配置。"
  },
  {
    "id": 92,
    "name": "小轮轮椅",
    "category": "轮椅系列",
    "price": 238,
    "image": "assets/p92.jpg?v=20260916",
    "description": "小轮轮椅，红色座靠面搭配金属色车架，设后方推手、扶手和脚踏，方便陪护推行。"
  },
  {
    "id": 67,
    "name": "小轮轮椅",
    "category": "轮椅系列",
    "price": 696,
    "image": "assets/p67.jpg?v=20260916",
    "description": "小轮轮椅，绿色车架搭配深色座靠面，设后方推手、扶手和脚踏，方便陪护推行。"
  },
  {
    "id": 68,
    "name": "小轮（可上飞机）轮椅",
    "category": "轮椅系列",
    "price": 688,
    "image": "assets/p68.jpg?v=20260916",
    "description": "小轮便携轮椅，采用紧凑车架，配有后方推手、扶手及脚踏。"
  },
  {
    "id": 69,
    "name": "电动轮椅",
    "category": "轮椅系列",
    "price": 2559,
    "image": "assets/p69.jpg?v=20260916",
    "description": "电动轮椅，带扶手操控器、座椅靠背及脚踏。"
  },
  {
    "id": 70,
    "name": "电镀大轮轮椅",
    "category": "轮椅系列",
    "price": 318,
    "image": "assets/p70.jpg?v=20260916",
    "description": "电镀大轮轮椅，采用金属色车架与格纹座靠垫，配有大后轮、推手和脚踏。"
  },
  {
    "id": 93,
    "name": "电镀带坐便轮椅",
    "category": "轮椅系列",
    "price": 388,
    "image": "assets/p93.jpg?v=20260916",
    "description": "电镀车架轮椅，座面带坐便开口，配有大后轮、扶手、脚踏与后方推手，结合移动乘坐和日常照护需求。"
  },
  {
    "id": 66,
    "name": "皮面大轮带坐便",
    "category": "轮椅系列",
    "price": 658,
    "image": "assets/p66.jpg?v=20260916",
    "description": "皮面大轮坐便轮椅，黑色座靠面搭配大后轮、扶手、脚踏和后方推手，结合乘坐移动与坐便设计。"
  },
  {
    "id": 71,
    "name": "便携式吸痰器",
    "category": "雾化吸痰器系列",
    "price": 458,
    "image": "assets/p71.jpg?v=20260916",
    "description": "便携式吸痰器，包括提手、储液瓶、管路及控制面板，便于了解护理设备配置。"
  },
  {
    "id": 72,
    "name": "养生康雾化器",
    "category": "雾化吸痰器系列",
    "price": 198,
    "image": "assets/p72.jpg?v=20260916",
    "description": "养生康 WS-16C 雾化器，压缩空气式雾化器，采用台式机身。"
  },
  {
    "id": 73,
    "name": "手动吸痰器",
    "category": "雾化吸痰器系列",
    "price": 65,
    "image": "assets/p73.jpg?v=20260916",
    "description": "手动吸痰器，型号 SL-XT-01，手持抽吸结构搭配储液瓶和管路。"
  },
  {
    "id": 74,
    "name": "鱼跃电动吸痰器",
    "category": "雾化吸痰器系列",
    "price": 598,
    "image": "assets/p74.jpg?v=20260916",
    "description": "鱼跃电动吸痰器，带储液瓶、提手及操作面板。"
  },
  {
    "id": 75,
    "name": "鱼跃雾化器",
    "category": "雾化吸痰器系列",
    "price": 328,
    "image": "assets/p75.jpg?v=20260916",
    "description": "鱼跃雾化器，型号 403T 高配版，带一体式提手。"
  }
];
