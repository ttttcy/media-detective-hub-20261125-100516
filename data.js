// Training materials and answer labels supplied by the user.
export const DEMO = "演示材料 · 培训模拟 · 非真实新闻";
export const assets = {
  "V001": {
    "id": "V001",
    "legacyId": "V101",
    "module": "N1",
    "type": "主播视频",
    "scene": "studio",
    "title": "演播室里的新闻主播",
    "subtitle": "用户提供的训练片段",
    "aspect": "9:16",
    "format": "MP4 · H.264 / AAC · 622×1106",
    "duration": 7.312,
    "width": 622,
    "height": 1106,
    "requirement": "保留完整片段与原声音轨；观看区域不叠加文字标志。",
    "src": "./media/v001.mp4",
    "poster": "./media/v001-poster.jpg",
    "zoom": null,
    "original": null,
    "source": null,
    "sourceNote": "用户提供的训练视频；原始发布页与制作档案尚未提供。",
    "status": "training"
  },
  "V006": {
    "id": "V006",
    "legacyId": "V601",
    "module": "N3",
    "type": "现场视频",
    "scene": "street",
    "title": "现场讲解片段",
    "subtitle": "用户提供的训练视频",
    "aspect": "16:9",
    "format": "MP4 · H.264 / AAC · 826×464",
    "duration": 20.59,
    "width": 826,
    "height": 464,
    "requirement": "保留完整片段与原声音轨；解析截图取自同一视频。",
    "src": "./media/v006.mp4",
    "poster": "./media/v006-poster.jpg",
    "zoom": null,
    "original": null,
    "source": null,
    "sourceNote": "用户提供并标注为真实视频。",
    "status": "training"
  },
  "P01": {
    "id": "P01",
    "title": "车门下的人物",
    "src": "./media/p01.jpg",
    "ai": true,
    "keyPoints": [
      "手部比例与翻转程度不自然",
      "人物悬挂与车辆位置不合常理"
    ],
    "description": "人物、车门与车辆组成的画面。",
    "region": "手掌与手臂比例、手腕朝向、人物与车辆的空间关系",
    "reason": "提供者标注为虚假素材，并指出手部比例、翻转程度及整体情境不合理。观察时应核对关节方向、抓握方式和悬挂关系，同时排除透视、摆拍与后期合成的影响。",
    "truthType": "AI / 合成素材",
    "type": "照片",
    "module": "N2",
    "aspect": "保留完整画面",
    "format": "JPG",
    "requirement": "保留提供的图片内容，提交前只显示中性说明；真实性按提供者标签设置。",
    "zoom": null,
    "original": null,
    "source": null,
    "sourceNote": "用户提供的训练照片；真伪标签由提供者给定，尚未接入独立来源证明。",
    "status": "training",
    "label": "训练素材"
  },
  "P02": {
    "id": "P02",
    "title": "排队的人群",
    "src": "./media/p02.jpg",
    "ai": false,
    "description": "室内排队区的人群与周围店铺。",
    "region": "人物遮挡、手部细节、队列栏杆与空间关系",
    "reason": "提供者标注为真实照片，本题据此设置答案。人多、动作相似和局部遮挡并不等于AI生成；不要为了找错而把正常的复杂场景判为虚假。正式核验仍需追溯原始文件与拍摄来源。",
    "truthType": "真实照片",
    "type": "照片",
    "module": "N2",
    "aspect": "保留完整画面",
    "format": "JPG",
    "requirement": "保留提供的图片内容，提交前只显示中性说明；真实性按提供者标签设置。",
    "zoom": null,
    "original": null,
    "source": null,
    "sourceNote": "用户提供的训练照片；真伪标签由提供者给定，尚未接入独立来源证明。",
    "status": "training",
    "label": "训练素材"
  },
  "P03": {
    "id": "P03",
    "title": "桌前的猫",
    "src": "./media/p03.jpg",
    "ai": true,
    "keyPoints": [
      "猫呈现人的持杯、饮用与办公姿态",
      "整体拟人化情境违背日常经验"
    ],
    "description": "猫、饮料杯、工牌与办公环境。",
    "region": "拟人化姿态、吸管与嘴部、持杯动作及工牌",
    "reason": "提供者标注为虚假素材，指出猫呈现出人的办公、持杯与饮用动作，整体设定违背日常经验。拟人化是一条情境线索；宠物穿衣、摆拍或艺术合成本身不能单独证明使用了AI。",
    "truthType": "AI / 合成素材",
    "type": "照片",
    "module": "N2",
    "aspect": "保留完整画面",
    "format": "JPG",
    "requirement": "保留提供的图片内容，提交前只显示中性说明；真实性按提供者标签设置。",
    "zoom": null,
    "original": null,
    "source": null,
    "sourceNote": "用户提供的训练照片；真伪标签由提供者给定，尚未接入独立来源证明。",
    "status": "training",
    "label": "训练素材"
  },
  "P04": {
    "id": "P04",
    "title": "街角交通",
    "src": "./media/p04.jpg",
    "ai": false,
    "description": "街角的车辆、行人与建筑。",
    "region": "街道透视、建筑连接、车辆与行人的遮挡关系",
    "reason": "提供者标注为真实照片，本题据此设置答案。密集建筑、倾斜透视和复杂招牌都可能出现在真实街景中，不应仅凭画面复杂或不熟悉的街道布局认定造假。",
    "truthType": "真实照片",
    "type": "照片",
    "module": "N2",
    "aspect": "保留完整画面",
    "format": "JPG",
    "requirement": "保留提供的图片内容，提交前只显示中性说明；真实性按提供者标签设置。",
    "zoom": null,
    "original": null,
    "source": null,
    "sourceNote": "用户提供的训练照片；真伪标签由提供者给定，尚未接入独立来源证明。",
    "status": "training",
    "label": "训练素材"
  },
  "P05": {
    "id": "P05",
    "title": "椅子上的人像",
    "src": "./media/p05.png",
    "ai": true,
    "keyPoints": [
      "两只手的形态与比例不一致",
      "拉链拉头与齿链连接位置错位"
    ],
    "description": "坐在椅子上的人物与衣着细节。",
    "displayWindow": {
      "width": 1320,
      "height": 1612,
      "top": 628
    },
    "region": "左右手的形态与比例、拉链拉头和齿链的连接位置",
    "reason": "提供者标注为虚假素材，并指出两只手存在差异、衣服拉链拉头位置不协调。可比较手部结构与衣物连接是否连贯，但应先考虑姿势、透视和遮挡造成的正常差异。",
    "truthType": "AI / 合成素材",
    "type": "照片",
    "module": "N2",
    "aspect": "保留完整画面",
    "format": "PNG",
    "requirement": "保留提供的图片内容，提交前只显示中性说明；真实性按提供者标签设置。",
    "zoom": null,
    "original": null,
    "source": null,
    "sourceNote": "用户提供的训练照片；真伪标签由提供者给定，尚未接入独立来源证明。",
    "status": "training",
    "label": "训练素材"
  },
  "P06": {
    "id": "P06",
    "title": "山路上的汽车",
    "src": "./media/p06.png",
    "ai": true,
    "keyPoints": [
      "车牌字符与排列不合理",
      "背景山峰过于密集，场景一致性可疑"
    ],
    "description": "行驶在山间道路上的汽车与远景。",
    "region": "车牌字形与排列、背景山峰的密集程度和场景一致性",
    "reason": "提供者标注为虚假素材，并指出车牌号不合理、背景山峰过于密集。观察时可检查字符结构和山体层次，并结合具体地理资料核验；山峰密集本身不能单独证明AI生成。",
    "truthType": "AI / 合成素材",
    "type": "照片",
    "module": "N2",
    "aspect": "保留完整画面",
    "format": "PNG",
    "requirement": "保留提供的图片内容，提交前只显示中性说明；真实性按提供者标签设置。",
    "zoom": null,
    "original": null,
    "source": null,
    "sourceNote": "用户提供的训练照片；真伪标签由提供者给定，尚未接入独立来源证明。",
    "status": "training",
    "label": "训练素材"
  },
  "V001-C01": {
    "id": "V001-C01",
    "legacyId": "V101-C01",
    "module": "N1",
    "type": "主播视频",
    "scene": "studio",
    "title": "眼部与眨眼 · 原片观察",
    "subtitle": "同一段原片 · 分别关注三个观察点",
    "aspect": "9:16",
    "format": "MP4 · H.264 / AAC · 622×1106",
    "duration": 7.312,
    "width": 622,
    "height": 1106,
    "requirement": "保留完整片段与原声音轨；观看区域不叠加文字标志。",
    "src": "./media/v001.mp4",
    "poster": "./media/v001-poster.jpg",
    "zoom": "./media/v001-eyes.jpg",
    "original": null,
    "source": null,
    "sourceNote": "用户提供的训练视频；原始发布页与制作档案尚未提供。",
    "status": "training"
  },
  "V001-C02": {
    "id": "V001-C02",
    "legacyId": "V101-C02",
    "module": "N1",
    "type": "主播视频",
    "scene": "studio",
    "title": "手部纹理 · 原片观察",
    "subtitle": "同一段原片 · 分别关注三个观察点",
    "aspect": "9:16",
    "format": "MP4 · H.264 / AAC · 622×1106",
    "duration": 7.312,
    "width": 622,
    "height": 1106,
    "requirement": "保留完整片段与原声音轨；观看区域不叠加文字标志。",
    "src": "./media/v001.mp4",
    "poster": "./media/v001-poster.jpg",
    "zoom": "./media/v001-hands.jpg",
    "original": null,
    "source": null,
    "sourceNote": "用户提供的训练视频；原始发布页与制作档案尚未提供。",
    "status": "training"
  },
  "V001-C03": {
    "id": "V001-C03",
    "legacyId": "V101-C03",
    "module": "N1",
    "type": "主播视频",
    "scene": "studio",
    "title": "语速与节奏 · 原片观察",
    "subtitle": "同一段原片 · 分别关注三个观察点",
    "aspect": "9:16",
    "format": "MP4 · H.264 / AAC · 622×1106",
    "duration": 7.312,
    "width": 622,
    "height": 1106,
    "requirement": "保留完整片段与原声音轨；观看区域不叠加文字标志。",
    "src": "./media/v001.mp4",
    "poster": "./media/v001-poster.jpg",
    "zoom": null,
    "original": null,
    "source": null,
    "sourceNote": "用户提供的训练视频；原始发布页与制作档案尚未提供。",
    "status": "training"
  },
  "N4FULL": {
    "id": "N4FULL",
    "module": "N4",
    "type": "完整版视频",
    "title": "新的故事片段",
    "duration": 84.58,
    "width": 1320,
    "height": 898,
    "src": "./media/n6-full.mp4",
    "poster": "./media/n6-full-frame-1.jpg",
    "status": "training",
    "aspect": "1320:898",
    "format": "MP4 · H.264 / AAC"
  },
  "N4C1": {
    "id": "N4C1",
    "module": "N4",
    "type": "观察片段",
    "title": "房间光影",
    "duration": 4.8,
    "width": 1320,
    "height": 898,
    "src": "./media/n6-c1.mp4",
    "poster": "./media/n6-c1-frame-1.jpg",
    "status": "training",
    "aspect": "1320:898",
    "format": "MP4 · H.264 / AAC"
  },
  "N4C2": {
    "id": "N4C2",
    "module": "N4",
    "type": "观察片段",
    "title": "身体与重力",
    "duration": 2.33,
    "width": 1320,
    "height": 898,
    "src": "./media/n6-c2.mp4",
    "poster": "./media/n6-c2-frame-1.jpg",
    "status": "training",
    "aspect": "1320:898",
    "format": "MP4 · H.264 / AAC"
  },
  "N4C3": {
    "id": "N4C3",
    "module": "N4",
    "type": "观察片段",
    "title": "人物动线",
    "duration": 5.29,
    "width": 1320,
    "height": 898,
    "src": "./media/n6-c3.mp4",
    "poster": "./media/n6-c3-frame-1.jpg",
    "status": "training",
    "aspect": "1320:898",
    "format": "MP4 · H.264 / AAC"
  },
  "N4C4": {
    "id": "N4C4",
    "module": "N4",
    "type": "观察片段",
    "title": "人物面部细节",
    "duration": 7.68,
    "width": 1320,
    "height": 898,
    "src": "./media/n6-c4.mp4",
    "poster": "./media/n6-c4-frame-1.jpg",
    "status": "training",
    "aspect": "1320:898",
    "format": "MP4 · H.264 / AAC"
  }
};
export const photos = ["P01","P02","P03","P04","P05","P06"].map(id=>assets[id]);
export const modules = [
  {
    "id": "N1",
    "title": "新闻视频观察",
    "short": "新闻视频",
    "minutes": 12,
    "description": "初始判断，再观察眨眼、手部纹理与语速，最后复判。",
    "intro": "先留下初始判断，再完成三次观察与复判。本模块合并计算综合成绩。",
    "questions": [
      {
        "id": "N1Q1",
        "title": "这段视频是真实视频，还是 AI 视频？",
        "asset": "V001",
        "gate": true,
        "scenario": "观看这段演播室主播片段，注意人物、动作与声音，记录你的第一判断。本题只判断视频的制作方式，不判断播报内容是否属实。",
        "groups": [
          {
            "id": "judgment",
            "label": "你的初始判断",
            "options": [
              {
                "id": "a",
                "text": "真实视频"
              },
              {
                "id": "b",
                "text": "AI 视频"
              }
            ],
            "correct": [
              "b"
            ],
            "points": 20,
            "category": "accuracy",
            "multiple": false,
            "optional": false
          }
        ],
        "feedback": {
          "region": "素材标注与原始制作记录",
          "reason": "此片段由素材提供者标注为AI视频，本题据此设置标准答案；未独立取得生成项目档案。",
          "trap": "未眨眼、手部纹理和机械语速只是需要进一步核验的线索，不能各自单独证明AI生成。",
          "limitation": "AI生成的视频可能播报真实信息；视频制作方式与所述事实真假需要分别核验。"
        },
        "sealed": true,
        "skipFeedback": true,
        "scoreLabel": "初始判断"
      },
      {
        "id": "N1Q2",
        "title": "眼部与眨眼",
        "asset": "V001-C01",
        "gate": true,
        "observationFocus": "重看片段，留意主播的眼睑动作：讲话过程中，能否观察到明显的眨眼？请根据这段短视频作答。",
        "scenario": "重看片段，留意主播的眼睑动作：讲话过程中，能否观察到明显的眨眼？请根据这段短视频作答。",
        "groups": [
          {
            "id": "judgment",
            "label": "哪项描述最符合本题的观察？",
            "options": [
              {
                "id": "a",
                "text": "片段内未见明显眨眼，值得进一步核验"
              },
              {
                "id": "b",
                "text": "片段内能看到多次清晰完整的眨眼"
              },
              {
                "id": "c",
                "text": "主播直视镜头就能证明AI生成"
              }
            ],
            "correct": [
              "a"
            ],
            "points": 20,
            "category": "accuracy",
            "multiple": false,
            "optional": false
          }
        ],
        "feedback": {
          "region": "主播双眼与眼睑动作",
          "reason": "本题按提供者指出的“片段内未见明显眨眼”设置观察答案。应检查连续的眼睑动作，不能用一张睁眼截图证明整段没有眨眼。",
          "trap": "片段仅约7秒；真人也可能短时间不眨眼。未见眨眼是一条观察线索，不能单独认定AI生成。",
          "limitation": "此短片由提供者标注为AI素材；三项观察仅作训练线索，不构成独立鉴定，也不用于判断播报内容的事实真假。"
        },
        "skipFeedback": true,
        "scoreLabel": "眨眼观察"
      },
      {
        "id": "N1Q3",
        "title": "手部纹理",
        "asset": "V001-C02",
        "gate": true,
        "observationFocus": "重看片段，关注桌面附近的双手：皮肤纹理、指关节和动作变化时的细节是否自然、连贯？",
        "scenario": "重看片段，关注桌面附近的双手：皮肤纹理、指关节和动作变化时的细节是否自然、连贯？",
        "groups": [
          {
            "id": "judgment",
            "label": "哪项描述最符合本题的观察？",
            "options": [
              {
                "id": "a",
                "text": "手部纹理显得不自然，应检查连续画面"
              },
              {
                "id": "b",
                "text": "手部细节已经足以证明是真人实拍"
              },
              {
                "id": "c",
                "text": "只要手放在桌面上，就能证明AI生成"
              }
            ],
            "correct": [
              "a"
            ],
            "points": 20,
            "category": "accuracy",
            "multiple": false,
            "optional": false
          }
        ],
        "feedback": {
          "region": "双手皮肤纹理、指关节与轮廓",
          "reason": "本题按提供者指出的“手部纹理不自然”设置观察答案。可结合局部图定位，再回到连续视频检查纹理和关节是否随动作自然变化。",
          "trap": "当前素材分辨率有限；压缩、磨皮、光照也会让皮肤显得平滑。局部图不是生成过程证明。",
          "limitation": "此短片由提供者标注为AI素材；三项观察仅作训练线索，不构成独立鉴定，也不用于判断播报内容的事实真假。"
        },
        "skipFeedback": true,
        "scoreLabel": "手部纹理观察"
      },
      {
        "id": "N1Q4",
        "title": "语速与节奏",
        "asset": "V001-C03",
        "gate": true,
        "observationFocus": "请开启声音重听原片，关注语速、词句之间的停顿和重音变化，判断播报节奏是否自然。",
        "scenario": "请开启声音重听原片，关注语速、词句之间的停顿和重音变化，判断播报节奏是否自然。",
        "groups": [
          {
            "id": "judgment",
            "label": "哪项描述最符合本题的观察？",
            "options": [
              {
                "id": "a",
                "text": "语速与停顿较机械，值得进一步核验"
              },
              {
                "id": "b",
                "text": "机械语速可以单独证明AI生成"
              },
              {
                "id": "c",
                "text": "只要发音清楚，就能证明是真人录音"
              }
            ],
            "correct": [
              "a"
            ],
            "points": 20,
            "category": "accuracy",
            "multiple": false,
            "optional": false
          }
        ],
        "feedback": {
          "region": "完整原声音轨中的语速、停顿与重音",
          "reason": "本题按提供者指出的“语速过于机械”设置观察答案。应具体比较语速、停顿与重音，而非只用“像不像机器”的主观印象判断。",
          "trap": "新闻播报、照稿朗读、配音与后期处理也可能有机械感。声音线索需要与来源和制作记录交叉核验。",
          "limitation": "此短片由提供者标注为AI素材；三项观察仅作训练线索，不构成独立鉴定，也不用于判断播报内容的事实真假。"
        },
        "skipFeedback": true,
        "scoreLabel": "语速与节奏观察"
      },
      {
        "id": "N1Q5",
        "title": "这段视频是真实视频，还是 AI 视频？",
        "quickChoice": true,
        "scenario": "结合刚才对眼部、手部和语速的观察，作出你的最终判断。",
        "groups": [
          {
            "id": "judgment",
            "label": "选择你的判断",
            "options": [
              {
                "id": "a",
                "text": "真实视频"
              },
              {
                "id": "b",
                "text": "AI 视频"
              }
            ],
            "correct": [
              "b"
            ],
            "points": 20,
            "category": "accuracy",
            "multiple": false,
            "optional": false
          }
        ],
        "skipFeedback": true,
        "scoreLabel": "观察后复判"
      }
    ]
  },
  {
    "id": "N2",
    "title": "照片识别",
    "short": "照片识别",
    "minutes": 7,
    "description": "同时观察六张照片，练习选择与核验。",
    "intro": "选出所有由 AI 生成或合成的照片。可再次点击取消；也可提交“全部未选”。",
    "questions": [
      {
        "id": "N2Q1",
        "title": "哪些照片由 AI 生成或合成？",
        "gallery": true,
        "scenario": "观察六张已接入的图片，选出你认为由AI生成或合成的照片。可放大查看细节，也可取消选择；答案将在提交后揭晓。",
        "groups": [
          {
            "id": "photos",
            "label": "选择所有符合条件的照片",
            "options": [
              {
                "id": "P01",
                "text": "P01 车门下的人物"
              },
              {
                "id": "P02",
                "text": "P02 排队的人群"
              },
              {
                "id": "P03",
                "text": "P03 桌前的猫"
              },
              {
                "id": "P04",
                "text": "P04 街角交通"
              },
              {
                "id": "P05",
                "text": "P05 椅子上的人像"
              },
              {
                "id": "P06",
                "text": "P06 山路上的汽车"
              }
            ],
            "correct": [
              "P01",
              "P03",
              "P05",
              "P06"
            ],
            "points": 100,
            "category": "accuracy",
            "multiple": true,
            "optional": true
          }
        ],
        "feedback": {
          "region": "六张图片的结构细节、情境与来源",
          "reason": "按提供者给定的标签，P01、P03、P05、P06为虚假/合成素材；P02、P04为真实照片。逐张展开可查看对应线索。",
          "trap": "不合常理、局部不自然和密集场景都只能触发进一步核验，不能凭单一特征机械判断。",
          "limitation": "本题答案以提供者标签为依据，并非独立图像鉴定；原始文件、制作记录和拍摄来源仍是重要核验材料。"
        },
        "scoreLabel": "AI照片选择（四张，每张25分）"
      }
    ]
  },
  {
    "id": "N3",
    "title": "新视频判断",
    "short": "新视频判断",
    "minutes": 3,
    "description": "观看新的片段，再作出你的判断。",
    "intro": "观看新的片段，独立判断是真实视频还是AI视频，提交后查看截图解析。",
    "questions": [
      {
        "id": "N3Q1",
        "title": "这段视频是真实视频，还是 AI 视频？",
        "asset": "V006",
        "videoReview": true,
        "scenario": "观看现场讲解片段，留意人物动作与周围环境。",
        "groups": [
          {
            "id": "judgment",
            "label": "你的判断",
            "options": [
              {
                "id": "a",
                "text": "真实视频"
              },
              {
                "id": "b",
                "text": "AI 视频"
              }
            ],
            "correct": [
              "a"
            ],
            "points": 100,
            "category": "accuracy",
            "multiple": false,
            "optional": false
          }
        ],
        "frames": [
          {
            "src": "./media/v006-frame-04.jpg",
            "time": "00:04",
            "title": "人物与现场处于同一空间",
            "reason": "人物、座椅、人群和起重机呈现前后层次；结合连续画面，可观察人物与背景的透视和遮挡关系。"
          },
          {
            "src": "./media/v006-frame-05.jpg",
            "time": "00:05",
            "title": "转身与手势相互配合",
            "reason": "讲解者转向身后的设备，同时抬手示意。头部、肩部、手臂和衣服随动作共同变化，前后动作连贯。"
          },
          {
            "src": "./media/v006-frame-16.jpg",
            "time": "00:16",
            "title": "手部动作与背景细节保持连贯",
            "reason": "回到正面讲解后，双手在身前配合表达；后方座椅、人群与设备仍处于一致的空间关系中。"
          }
        ],
        "gate": true,
        "hideTaskCount": true,
        "scoreLabel": "新视频真假判断"
      }
    ]
  },
  {
    "id": "N4",
    "title": "故事视频观察",
    "short": "故事视频",
    "minutes": 6,
    "description": "先看全片，再从四个细节观察。",
    "intro": "看完完整版后留下整体判断，再依次观察四段素材。每段作答后揭示对应细节。",
    "questions": [
      {
        "id": "N4Q1",
        "title": "看完整段视频，你会如何判断？",
        "asset": "N4FULL",
        "gate": true,
        "deferredFeedback": true,
        "scenario": "请结合完整画面，判断视频的制作方式。接下来会分别观察四个片段。",
        "groups": [
          {
            "id": "judgment",
            "label": "你的整体判断",
            "options": [
              {
                "id": "a",
                "text": "真实视频"
              },
              {
                "id": "b",
                "text": "AI 视频"
              }
            ],
            "correct": [
              "b"
            ],
            "points": 20,
            "category": "accuracy",
            "multiple": false,
            "optional": false
          }
        ],
        "feedback": {
          "region": "光影、重力、动线与面部纹理",
          "reason": "本题按提供者给定的AI素材及四项观察线索设置答案。",
          "trap": "机器人或故事情节本身不能单独证明使用了AI。",
          "limitation": "整体判断需要结合连续画面与素材来源。"
        },
        "scoreLabel": "故事整体判断"
      },
      {
        "id": "N4Q2",
        "title": "房间光影",
        "asset": "N4C1",
        "gate": true,
        "clipReview": true,
        "observationFocus": "留意窗户、地面、墙面与人物身上的光影方向。",
        "scenario": "你认为这段视频是真实拍摄，还是 AI 生成？",
        "groups": [
          {
            "id": "judgment",
            "label": "你的判断",
            "options": [
              {
                "id": "a",
                "text": "真实视频"
              },
              {
                "id": "b",
                "text": "AI 视频"
              }
            ],
            "correct": [
              "b"
            ],
            "points": 20,
            "category": "accuracy",
            "multiple": false,
            "optional": false
          }
        ],
        "reveal": "房间光影不符合现实",
        "reason": "本例的观察重点是窗光与室内明暗是否对应。顺着窗户的位置检查地面亮区，再对照机器人和女孩身上的受光方向；不同区域的光影关系显得不协调。",
        "points": [
          "先定位窗户，再比较地面与墙面的亮区。",
          "对照人物与室内物体的受光面和阴影方向。",
          "回看片段，检查镜头变化时光影是否同步。"
        ],
        "note": "多光源也会造成复杂光影，应比较同一场景内的整体关系。",
        "frames": [
          {
            "src": "./media/n6-c1-frame-1.jpg",
            "time": "00:00.5",
            "title": "前段画面"
          },
          {
            "src": "./media/n6-c1-frame-2.jpg",
            "time": "00:03.5",
            "title": "后续画面"
          }
        ],
        "scoreLabel": "房间光影判断"
      },
      {
        "id": "N4Q3",
        "title": "身体与重力",
        "asset": "N4C2",
        "gate": true,
        "clipReview": true,
        "observationFocus": "留意女孩身体的支撑点、重心与双腿的运动。",
        "scenario": "你认为这段视频是真实拍摄，还是 AI 生成？",
        "groups": [
          {
            "id": "judgment",
            "label": "你的判断",
            "options": [
              {
                "id": "a",
                "text": "真实视频"
              },
              {
                "id": "b",
                "text": "AI 视频"
              }
            ],
            "correct": [
              "b"
            ],
            "points": 20,
            "category": "accuracy",
            "multiple": false,
            "optional": false
          }
        ],
        "reveal": "女孩身体不符合重力",
        "reason": "观察女孩被抱起和旋转时的姿态变化。本例中，身体抬起、双腿外甩与回落的过程，和可见的支撑点、重心变化不够协调。",
        "points": [
          "先看身体由哪里支撑，重心位于何处。",
          "比较躯干与双腿是否随旋转自然变化。",
          "连看前后帧，检查抬起与回落是否有连续过程。"
        ],
        "note": "快速运动和拍摄角度可能影响单帧观感，要结合整段动作。",
        "frames": [
          {
            "src": "./media/n6-c2-frame-1.jpg",
            "time": "00:00.4",
            "title": "前段画面"
          },
          {
            "src": "./media/n6-c2-frame-2.jpg",
            "time": "00:01.7",
            "title": "后续画面"
          }
        ],
        "scoreLabel": "身体与重力判断"
      },
      {
        "id": "N4Q4",
        "title": "人物动线",
        "asset": "N4C3",
        "gate": true,
        "clipReview": true,
        "observationFocus": "跟随人物的位置，留意搬动、离开与空房间之间的衔接。",
        "scenario": "你认为这段视频是真实拍摄，还是 AI 生成？",
        "groups": [
          {
            "id": "judgment",
            "label": "你的判断",
            "options": [
              {
                "id": "a",
                "text": "真实视频"
              },
              {
                "id": "b",
                "text": "AI 视频"
              }
            ],
            "correct": [
              "b"
            ],
            "points": 20,
            "category": "accuracy",
            "multiple": false,
            "optional": false
          }
        ],
        "reveal": "人物动线没有过程",
        "reason": "连续观察人物、被搬动物体和房间的相对位置。本例的人物离开与场景变化缺少充分的动作衔接，位置发生改变，却没有展示对应的移动过程。",
        "points": [
          "记住人物与物体的起始位置。",
          "追踪人物移动、转身和离开画面的过程。",
          "比较前后画面，找出缺少动作衔接的位置。"
        ],
        "note": "剪辑也可能省略过程；本题训练的是发现连续性疑点。",
        "frames": [
          {
            "src": "./media/n6-c3-frame-1.jpg",
            "time": "00:00.5",
            "title": "前段画面"
          },
          {
            "src": "./media/n6-c3-frame-2.jpg",
            "time": "00:02.8",
            "title": "后续画面"
          }
        ],
        "scoreLabel": "人物动线判断"
      },
      {
        "id": "N4Q5",
        "title": "人物面部细节",
        "asset": "N4C4",
        "gate": true,
        "clipReview": true,
        "observationFocus": "留意额头、眼周和嘴部纹理在表情变化时的表现。",
        "scenario": "你认为这段视频是真实拍摄，还是 AI 生成？",
        "groups": [
          {
            "id": "judgment",
            "label": "你的判断",
            "options": [
              {
                "id": "a",
                "text": "真实视频"
              },
              {
                "id": "b",
                "text": "AI 视频"
              }
            ],
            "correct": [
              "b"
            ],
            "points": 20,
            "category": "accuracy",
            "multiple": false,
            "optional": false
          }
        ],
        "reveal": "人物面部细节过多，不符合真实情况",
        "reason": "本例重点观察面部纹理的密度与表情变化是否匹配。对照额头、眼周和嘴部，可注意到细节显得过度强化；需要连看表情变化时，纹理是否自然跟随。",
        "points": [
          "比较额头、眼周和嘴部的纹理分布。",
          "观察说话与微笑时，纹理是否随肌肉运动。",
          "对照脸部与颈部、手部及背景的细节程度。"
        ],
        "note": "皱纹多或年龄本身不是AI判据；重点是纹理与运动、光照的协调性。",
        "frames": [
          {
            "src": "./media/n6-c4-frame-1.jpg",
            "time": "00:00.5",
            "title": "前段画面"
          },
          {
            "src": "./media/n6-c4-frame-2.jpg",
            "time": "00:05.5",
            "title": "后续画面"
          }
        ],
        "scoreLabel": "面部细节判断"
      }
    ]
  }
];
