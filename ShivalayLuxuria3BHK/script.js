(function(){
    var script = {
 "definitions": [{
 "initialPosition": {
  "yaw": -46.76,
  "class": "PanoramaCameraPosition",
  "pitch": -5.94
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_06375ECF_0D54_312F_4177_7E285BA9D228_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 168.71,
  "class": "PanoramaCameraPosition",
  "pitch": -2.05
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_060EC68E_0D57_F111_419E_217FFFD70579_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 142.84,
  "class": "PanoramaCameraPosition",
  "pitch": -7.21
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_06095AA8_0D57_D110_4187_78462FE21C2F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -37.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_21ECE964_3055_FD57_41A9_9C04E5909969",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 171.96,
   "yaw": -57.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421"
  },
  {
   "backwardYaw": 67.69,
   "yaw": 121.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348"
  },
  {
   "backwardYaw": -113.69,
   "yaw": 30.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0600F793_0D54_3F37_414A_B6563E52A95D"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/f/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/u/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/r/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/b/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/d/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/l/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_t.jpg"
  }
 ],
 "label": "Passage Area",
 "id": "panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961",
 "thumbnailUrl": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_t.jpg",
 "overlays": [
  "this.overlay_1BE03862_0D7C_3111_418F_D2FF1A48CE90",
  "this.overlay_1BDDA89D_0D7D_F133_419C_82CA660727F6",
  "this.overlay_1BBB4175_0D7C_33F3_41A9_2AF06AB10238"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421"
  },
  {
   "backwardYaw": -6.91,
   "yaw": 66.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA"
  },
  {
   "backwardYaw": -59.41,
   "yaw": 17.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_t.jpg"
  }
 ],
 "label": "Pooja Area",
 "id": "panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE",
 "thumbnailUrl": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_t.jpg",
 "overlays": [
  "this.overlay_1EE144D0_0D74_5131_4193_4F04E6DD6CD0",
  "this.overlay_19C75040_0D74_D111_4187_5321C3AF6050",
  "this.overlay_1B35F33D_0D75_F770_4164_6A3A8396633C"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 13.69,
   "yaw": -2.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_t.jpg"
  }
 ],
 "label": "Balcony",
 "id": "panorama_060F6B41_0D54_3713_41A9_372F82D1F73A",
 "thumbnailUrl": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_t.jpg",
 "overlays": [
  "this.overlay_1E3A8E2B_0D6C_F117_4190_8EE742272394"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060232FE_0D54_56F1_4181_D161227741D2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_060232FE_0D54_56F1_4181_D161227741D2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0600F793_0D54_3F37_414A_B6563E52A95D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_0600F793_0D54_3F37_414A_B6563E52A95D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0602D350_0D54_F730_419C_5E869415F462",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_0602D350_0D54_F730_419C_5E869415F462_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_063A6D22_0D55_F311_4152_490242C3339D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_063A6D22_0D55_F311_4152_490242C3339D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060C6627_0D54_511F_4197_F3F2A8E9228B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060F6B41_0D54_3713_41A9_372F82D1F73A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060D1181_0D54_3313_418A_2911805BC54C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_060D1181_0D54_3313_418A_2911805BC54C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06375ECF_0D54_312F_4177_7E285BA9D228",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_06375ECF_0D54_312F_4177_7E285BA9D228_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06095AA8_0D57_D110_4187_78462FE21C2F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_06095AA8_0D57_D110_4187_78462FE21C2F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060EC68E_0D57_F111_419E_217FFFD70579",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 0)",
   "camera": "this.panorama_060EC68E_0D57_F111_419E_217FFFD70579_camera",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -161.69,
   "yaw": 164.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_t.jpg"
  }
 ],
 "label": "Washroom",
 "id": "panorama_06375ECF_0D54_312F_4177_7E285BA9D228",
 "thumbnailUrl": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_t.jpg",
 "overlays": [
  "this.overlay_17014255_0D6C_D133_4191_C7310B5DEE0C"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -157.18,
  "class": "PanoramaCameraPosition",
  "pitch": -17.66
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_060232FE_0D54_56F1_4181_D161227741D2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 166.94,
   "yaw": 30.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_t.jpg"
  }
 ],
 "label": "Foyer",
 "id": "panorama_063A6D22_0D55_F311_4152_490242C3339D",
 "thumbnailUrl": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_t.jpg",
 "overlays": [
  "this.overlay_1F27524D_0D6C_3113_41A3_56EA27728852"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 19.38,
  "class": "PanoramaCameraPosition",
  "pitch": 1.63
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_060D1181_0D54_3313_418A_2911805BC54C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 177.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_23AB56D6_3055_F773_41BE_5EAA31E71969",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 76.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_20ABC7D5_3055_F570_4199_1F8CE5B4B9BA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 126.11,
  "class": "PanoramaCameraPosition",
  "hfov": 129,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 323000
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_20AFA7C2_3055_F553_41C6_00B7868836D0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -28.22,
  "class": "PanoramaCameraPosition",
  "pitch": -13.03
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -178.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_23D99618_3055_F6FF_41C0_42B30CC743BF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 18.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_219E397A_3055_FD33_41C3_8EA795FC9D1E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 126.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_215E9800_3055_FACF_41B1_052B9B1A8760",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 105.89,
   "yaw": -103.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_t.jpg"
  }
 ],
 "label": "Wash Room",
 "id": "panorama_06095AA8_0D57_D110_4187_78462FE21C2F",
 "thumbnailUrl": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_t.jpg",
 "overlays": [
  "this.overlay_17B93735_0D6C_3F70_419C_3FF24B04F094"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -111.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_2386D69A_3055_F7F3_4166_227F26607892",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 5.9,
   "yaw": -110.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_060232FE_0D54_56F1_4181_D161227741D2"
  },
  {
   "backwardYaw": -53.89,
   "yaw": 1.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA"
  },
  {
   "backwardYaw": -103.41,
   "yaw": 105.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06095AA8_0D57_D110_4187_78462FE21C2F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0602D350_0D54_F730_419C_5E869415F462"
  },
  {
   "backwardYaw": -57.15,
   "yaw": 171.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_t.jpg"
  }
 ],
 "label": "Passage Area",
 "id": "panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421",
 "thumbnailUrl": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_t.jpg",
 "overlays": [
  "this.overlay_18775DA7_0D74_731F_41A7_EE6B077A7807",
  "this.overlay_18E25EBB_0D74_5177_4139_04494FC164BA",
  "this.overlay_18EBC868_0D74_5111_41A0_22D7A5FC3398",
  "this.overlay_188279E0_0D74_7311_41A1_97686CA7CE32",
  "this.overlay_18999029_0D74_3113_41A3_494D2C8E90EF"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -112.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_21C0C923_3055_FAD1_41B9_C9EB45C1F220",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 31.18,
  "class": "PanoramaCameraPosition",
  "pitch": -0.3
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_063A6D22_0D55_F311_4152_490242C3339D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 7.08,
  "class": "PanoramaCameraPosition",
  "pitch": -5.13
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_0600F793_0D54_3F37_414A_B6563E52A95D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 66.7,
   "yaw": -6.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE"
  },
  {
   "backwardYaw": 1.63,
   "yaw": -53.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421"
  },
  {
   "backwardYaw": -103.88,
   "yaw": -105.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0602D350_0D54_F730_419C_5E869415F462"
  },
  {
   "backwardYaw": -157.39,
   "yaw": 30.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84"
  },
  {
   "backwardYaw": 30.27,
   "yaw": 166.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_063A6D22_0D55_F311_4152_490242C3339D"
  }
 ],
 "vfov": 180,
 "label": "Living Room",
 "id": "panorama_06AF5325_0D54_5713_4175_9EEECAE144FA",
 "thumbnailUrl": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_02252A27_0D54_D11F_4182_14DE3DA1FF12",
  "this.overlay_1D0186A8_0D54_D110_4193_41047CA74B40",
  "this.overlay_1DF4B984_0D54_5311_419C_A22D898C0E52",
  "this.overlay_1DB61141_0D54_3310_4185_B30A71315DF7",
  "this.overlay_02CBA294_0D55_D131_4191_D3962E310D4F"
 ],
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -27.17,
  "class": "PanoramaCameraPosition",
  "pitch": -31.29
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 68.19,
   "yaw": -121.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0600F793_0D54_3F37_414A_B6563E52A95D"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_t.jpg"
  }
 ],
 "label": "Washroom",
 "id": "panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D",
 "thumbnailUrl": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_t.jpg",
 "overlays": [
  "this.overlay_15E84A59_0D77_D133_4185_2A9CA7B4A61E"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 122.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_2155E7E9_3055_F553_41C0_E1A1032E725B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 177.43,
  "class": "PanoramaCameraPosition",
  "pitch": 3.61
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 0, 1)",
   "camera": "this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060232FE_0D54_56F1_4181_D161227741D2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 1, 2)",
   "camera": "this.panorama_060232FE_0D54_56F1_4181_D161227741D2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0600F793_0D54_3F37_414A_B6563E52A95D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 2, 3)",
   "camera": "this.panorama_0600F793_0D54_3F37_414A_B6563E52A95D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 3, 4)",
   "camera": "this.panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0602D350_0D54_F730_419C_5E869415F462",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 4, 5)",
   "camera": "this.panorama_0602D350_0D54_F730_419C_5E869415F462_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 5, 6)",
   "camera": "this.panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_063A6D22_0D55_F311_4152_490242C3339D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 6, 7)",
   "camera": "this.panorama_063A6D22_0D55_F311_4152_490242C3339D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 7, 8)",
   "camera": "this.panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 8, 9)",
   "camera": "this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060C6627_0D54_511F_4197_F3F2A8E9228B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 9, 10)",
   "camera": "this.panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060F6B41_0D54_3713_41A9_372F82D1F73A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 10, 11)",
   "camera": "this.panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 11, 12)",
   "camera": "this.panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 12, 13)",
   "camera": "this.panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060D1181_0D54_3313_418A_2911805BC54C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 13, 14)",
   "camera": "this.panorama_060D1181_0D54_3313_418A_2911805BC54C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06375ECF_0D54_312F_4177_7E285BA9D228",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 14, 15)",
   "camera": "this.panorama_06375ECF_0D54_312F_4177_7E285BA9D228_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06095AA8_0D57_D110_4187_78462FE21C2F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 15, 16)",
   "camera": "this.panorama_06095AA8_0D57_D110_4187_78462FE21C2F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060EC68E_0D57_F111_419E_217FFFD70579",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist, 16, 0)",
   "camera": "this.panorama_060EC68E_0D57_F111_419E_217FFFD70579_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -8.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_21DC290F_3055_FAD0_41B3_CD08BC417B77",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "yaw": 66.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_21F67939_3055_FD30_419F_DBCF7F19F03E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 30.27,
   "yaw": -113.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961"
  },
  {
   "backwardYaw": -121.73,
   "yaw": 68.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_t.jpg"
  }
 ],
 "label": "Master Bedroom 2",
 "id": "panorama_0600F793_0D54_3F37_414A_B6563E52A95D",
 "thumbnailUrl": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_t.jpg",
 "overlays": [
  "this.overlay_1ADC7440_0D74_5110_41A1_32348ECFE841",
  "this.overlay_15D60A54_0D75_D131_419F_B6D4DA61119F"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 120.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_2122C8E3_3055_FB50_41C2_EE60BEE3A246",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -174.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_20A5C7AE_3055_F5D0_41C4_B80250F48988",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 73.69,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -110.41,
   "yaw": 5.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_t.jpg"
  }
 ],
 "label": "Master Bedroom 1",
 "id": "panorama_060232FE_0D54_56F1_4181_D161227741D2",
 "thumbnailUrl": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_t.jpg",
 "overlays": [
  "this.overlay_15C26C2E_0D74_3110_4190_D8362E187243"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 69.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_232DC5B7_3055_F531_41A7_00005E0C168A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 41.53,
  "class": "PanoramaCameraPosition",
  "pitch": -3.29
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_0602D350_0D54_F730_419C_5E869415F462_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -166.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_217AB853_3055_FB71_41C7_CD1DC921AA15",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -149.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_210278A7_3055_FBD1_419B_BB9976096BFE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 0, 1)",
   "camera": "this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060232FE_0D54_56F1_4181_D161227741D2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 1, 2)",
   "camera": "this.panorama_060232FE_0D54_56F1_4181_D161227741D2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0600F793_0D54_3F37_414A_B6563E52A95D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 2, 3)",
   "camera": "this.panorama_0600F793_0D54_3F37_414A_B6563E52A95D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 3, 4)",
   "camera": "this.panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0602D350_0D54_F730_419C_5E869415F462",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 4, 5)",
   "camera": "this.panorama_0602D350_0D54_F730_419C_5E869415F462_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 5, 6)",
   "camera": "this.panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_063A6D22_0D55_F311_4152_490242C3339D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 6, 7)",
   "camera": "this.panorama_063A6D22_0D55_F311_4152_490242C3339D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 7, 8)",
   "camera": "this.panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 8, 9)",
   "camera": "this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060C6627_0D54_511F_4197_F3F2A8E9228B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 9, 10)",
   "camera": "this.panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060F6B41_0D54_3713_41A9_372F82D1F73A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 10, 11)",
   "camera": "this.panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 11, 12)",
   "camera": "this.panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 12, 13)",
   "camera": "this.panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060D1181_0D54_3313_418A_2911805BC54C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 13, 14)",
   "camera": "this.panorama_060D1181_0D54_3313_418A_2911805BC54C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06375ECF_0D54_312F_4177_7E285BA9D228",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 14, 15)",
   "camera": "this.panorama_06375ECF_0D54_312F_4177_7E285BA9D228_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06095AA8_0D57_D110_4187_78462FE21C2F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 15, 16)",
   "camera": "this.panorama_06095AA8_0D57_D110_4187_78462FE21C2F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060EC68E_0D57_F111_419E_217FFFD70579",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist, 16, 0)",
   "camera": "this.panorama_060EC68E_0D57_F111_419E_217FFFD70579_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -13.06,
  "class": "PanoramaCameraPosition",
  "hfov": 129,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 323000
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_21764840_3055_FB4F_41B9_0565139FBB10",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -149.73,
  "class": "PanoramaCameraPosition",
  "hfov": 129,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 323000
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_23B896C1_3055_F750_41B8_F94D150BFF61",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 58.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_210978BB_3055_FB31_41C0_978CF6F4CD02",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -149.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_23E4E672_3055_F733_41BF_F0A9C39DC8F0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": -6.35,
   "duration": 3000,
   "targetHfov": 129,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "initialPosition": {
  "yaw": -20.95,
  "class": "PanoramaCameraPosition",
  "hfov": 129,
  "pitch": -6.35
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 323000
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "yaw": -20.95,
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "pitch": -90
 }
},
{
 "initialPosition": {
  "yaw": -15.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_211F7890_3055_FBCF_41BF_E3FF06AEA375",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 22.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_23F2965F_3055_F771_41B5_B23D6C44C039",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -125.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_2163E866_3055_FB53_4182_60B4DDF36734",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 43.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_21598815_3055_FAF1_41B4_EC4EB82943C0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 74.36,
  "class": "PanoramaCameraPosition",
  "hfov": 129,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 323000
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_21FB494F_3055_FD51_41B4_C471CE22D9F6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0.56,
  "class": "PanoramaCameraPosition",
  "pitch": -3.92
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 17.21,
   "yaw": -59.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE"
  },
  {
   "backwardYaw": 30.27,
   "yaw": -157.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421"
  },
  {
   "backwardYaw": -2.14,
   "yaw": 13.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_060F6B41_0D54_3713_41A9_372F82D1F73A"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_t.jpg"
  }
 ],
 "label": "Balcony View",
 "id": "panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84",
 "thumbnailUrl": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_t.jpg",
 "overlays": [
  "this.overlay_1F539713_0D6C_7F37_4198_B9FA7DA344AB",
  "this.overlay_1FCDCBD0_0D6F_D731_415E_628A4DD2B9C0",
  "this.overlay_1E2CAEE8_0D6C_D111_4188_5CDAC6669C76",
  "this.overlay_1E0EFEB5_0D6C_3170_4199_408809F322A8"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -105.64,
   "yaw": -103.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA"
  },
  {
   "backwardYaw": 142.54,
   "yaw": 105.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_060EC68E_0D57_F111_419E_217FFFD70579"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_t.jpg"
  }
 ],
 "label": "Kitchen",
 "id": "panorama_0602D350_0D54_F730_419C_5E869415F462",
 "thumbnailUrl": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_t.jpg",
 "overlays": [
  "this.overlay_19855A77_0D74_31F0_4182_C434119C3C81",
  "this.overlay_18482FAC_0D74_6F10_4153_520A245127D6"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -9.78,
  "class": "PanoramaCameraPosition",
  "pitch": -22.91
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 0, 1)",
   "camera": "this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060232FE_0D54_56F1_4181_D161227741D2",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 1, 2)",
   "camera": "this.panorama_060232FE_0D54_56F1_4181_D161227741D2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0600F793_0D54_3F37_414A_B6563E52A95D",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 2, 3)",
   "camera": "this.panorama_0600F793_0D54_3F37_414A_B6563E52A95D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 3, 4)",
   "camera": "this.panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0602D350_0D54_F730_419C_5E869415F462",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 4, 5)",
   "camera": "this.panorama_0602D350_0D54_F730_419C_5E869415F462_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 5, 6)",
   "camera": "this.panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_063A6D22_0D55_F311_4152_490242C3339D",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 6, 7)",
   "camera": "this.panorama_063A6D22_0D55_F311_4152_490242C3339D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 7, 8)",
   "camera": "this.panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 8, 9)",
   "camera": "this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060C6627_0D54_511F_4197_F3F2A8E9228B",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 9, 10)",
   "camera": "this.panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060F6B41_0D54_3713_41A9_372F82D1F73A",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 10, 11)",
   "camera": "this.panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 11, 12)",
   "camera": "this.panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 12, 13)",
   "camera": "this.panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060D1181_0D54_3313_418A_2911805BC54C",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 13, 14)",
   "camera": "this.panorama_060D1181_0D54_3313_418A_2911805BC54C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06375ECF_0D54_312F_4177_7E285BA9D228",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 14, 15)",
   "camera": "this.panorama_06375ECF_0D54_312F_4177_7E285BA9D228_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06095AA8_0D57_D110_4187_78462FE21C2F",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 15, 16)",
   "camera": "this.panorama_06095AA8_0D57_D110_4187_78462FE21C2F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060EC68E_0D57_F111_419E_217FFFD70579",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 16, 0)",
   "camera": "this.panorama_060EC68E_0D57_F111_419E_217FFFD70579_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 173.09,
  "class": "PanoramaCameraPosition",
  "hfov": 129,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 323000
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_213FD8CF_3055_FB51_41B0_96A29F09B0CB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -74.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_2394F686_3055_F7D3_41BA_3D47383334DB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -113.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_23D365EB_3055_F551_41C0_A154EF44D02F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 123.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_2141C82C_3055_FAD7_41A8_FDE50A4F7911",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -56.44,
   "yaw": -136.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_060C6627_0D54_511F_4197_F3F2A8E9228B"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_t.jpg"
  }
 ],
 "label": "Balcony View",
 "id": "panorama_060D1181_0D54_3313_418A_2911805BC54C",
 "thumbnailUrl": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_t.jpg",
 "overlays": [
  "this.overlay_172F6210_0D6C_5131_41A2_DE31B708CB65"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -53.43,
   "yaw": 54.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348"
  },
  {
   "backwardYaw": -136.82,
   "yaw": -56.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_060D1181_0D54_3313_418A_2911805BC54C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_06375ECF_0D54_312F_4177_7E285BA9D228"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_t.jpg"
  }
 ],
 "label": "Balcony View Master Bedroom 3",
 "id": "panorama_060C6627_0D54_511F_4197_F3F2A8E9228B",
 "thumbnailUrl": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_t.jpg",
 "overlays": [
  "this.overlay_14A3413C_0D74_3371_4195_0A2607167BCC",
  "this.overlay_177B52C8_0D6C_5110_4196_EDA910DE61B8",
  "this.overlay_164660B7_0D6C_717F_41A0_AF7A4B54449B"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 0, 1)",
   "camera": "this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060232FE_0D54_56F1_4181_D161227741D2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 1, 2)",
   "camera": "this.panorama_060232FE_0D54_56F1_4181_D161227741D2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0600F793_0D54_3F37_414A_B6563E52A95D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 2, 3)",
   "camera": "this.panorama_0600F793_0D54_3F37_414A_B6563E52A95D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 3, 4)",
   "camera": "this.panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0602D350_0D54_F730_419C_5E869415F462",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 4, 5)",
   "camera": "this.panorama_0602D350_0D54_F730_419C_5E869415F462_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 5, 6)",
   "camera": "this.panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_063A6D22_0D55_F311_4152_490242C3339D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 6, 7)",
   "camera": "this.panorama_063A6D22_0D55_F311_4152_490242C3339D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 7, 8)",
   "camera": "this.panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 8, 9)",
   "camera": "this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060C6627_0D54_511F_4197_F3F2A8E9228B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 9, 10)",
   "camera": "this.panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060F6B41_0D54_3713_41A9_372F82D1F73A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 10, 11)",
   "camera": "this.panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 11, 12)",
   "camera": "this.panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 12, 13)",
   "camera": "this.panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060D1181_0D54_3313_418A_2911805BC54C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 13, 14)",
   "camera": "this.panorama_060D1181_0D54_3313_418A_2911805BC54C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06375ECF_0D54_312F_4177_7E285BA9D228",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 14, 15)",
   "camera": "this.panorama_06375ECF_0D54_312F_4177_7E285BA9D228_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06095AA8_0D57_D110_4187_78462FE21C2F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 15, 16)",
   "camera": "this.panorama_06095AA8_0D57_D110_4187_78462FE21C2F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_060EC68E_0D57_F111_419E_217FFFD70579",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist, 16, 0)",
   "camera": "this.panorama_060EC68E_0D57_F111_419E_217FFFD70579_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -74.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_212808FB_3055_FB31_41C4_A351CCDC456C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 76.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_23CCA644_3055_F757_41A3_68BCC8FA0EA5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -58.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_2116E87A_3055_FB33_41B2_544F6BC7DF21",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 54.11,
   "yaw": -53.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_060C6627_0D54_511F_4197_F3F2A8E9228B"
  },
  {
   "backwardYaw": 121.47,
   "yaw": 67.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961"
  },
  {
   "backwardYaw": 164.9,
   "yaw": -161.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_06375ECF_0D54_312F_4177_7E285BA9D228"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_t.jpg"
  }
 ],
 "label": "MAster Bedroom 3",
 "id": "panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348",
 "thumbnailUrl": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_t.jpg",
 "overlays": [
  "this.overlay_15ABAE18_0D74_D131_41A3_E71C8573DCB4",
  "this.overlay_14229F43_0D74_2F17_41A9_E15C48007003",
  "this.overlay_14B634CF_0D74_D12F_4189_D5E6318C963E"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 105.39,
   "yaw": 142.54,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0602D350_0D54_F730_419C_5E869415F462"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_t.jpg"
  }
 ],
 "label": "Wash Area",
 "id": "panorama_060EC68E_0D57_F111_419E_217FFFD70579",
 "thumbnailUrl": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_t.jpg",
 "overlays": [
  "this.overlay_167E4B64_0D6C_5711_41A2_9735251E9814"
 ],
 "partial": false,
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -162.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "camera_238946AE_3055_F7D0_41C0_74FFB872A545",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 169.14,
  "class": "PanoramaCameraPosition",
  "pitch": 1.93
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -94.66,
  "class": "PanoramaCameraPosition",
  "pitch": -11.67
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "paddingTop": 0,
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 50,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "shadow": false,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "paddingBottom": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427"
 ],
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": "13.892%",
 "paddingBottom": 0,
 "data": {
  "name": "--- MENU"
 },
 "gap": 10,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "absolute",
 "paddingTop": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": 641,
 "paddingBottom": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "gap": 10,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "absolute",
 "paddingTop": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
  "this.Container_33F2D10A_17CC_3D05_4199_54BCA881FB17",
  "this.Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
  "this.Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B"
 ],
 "id": "Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
 "left": 30,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "width": 573,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "top": 25,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": 116,
 "paddingBottom": 0,
 "data": {
  "name": "--STICKER"
 },
 "gap": 10,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "absolute",
 "paddingTop": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
  "this.Container_386C28AA_17CC_0B05_41B7_3334E854CA29"
 ],
 "id": "Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "--INFO photoalbum"
 },
 "gap": 10,
 "verticalAlign": "top",
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_3811F7E8_17DC_0505_417B_3406AEA143C9"
 ],
 "id": "Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "gap": 10,
 "verticalAlign": "top",
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_2792F64D_17CC_071F_415E_8686768A06D3"
 ],
 "id": "Container_2792A64E_17CC_071D_41B0_BEA23997C067",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "--LOCATION"
 },
 "gap": 10,
 "verticalAlign": "top",
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E"
 ],
 "id": "Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "gap": 10,
 "verticalAlign": "top",
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076"
 ],
 "id": "Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "gap": 10,
 "verticalAlign": "top",
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
  "this.Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27"
 ],
 "id": "Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "--CONTACT"
 },
 "gap": 10,
 "verticalAlign": "top",
 "visible": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button house info"
 },
 "backgroundColor": [
  "#000000"
 ],
 "id": "Button_0B89499F_06C8_BD46_4189_ED238C875508",
 "left": "1.45%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "width": 143,
 "shadowSpread": 1,
 "iconWidth": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "top": "16.1%",
 "borderColor": "#000000",
 "borderSize": 0,
 "shadowBlurRadius": 15,
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "push",
 "iconBeforeLabel": true,
 "fontSize": 18,
 "rollOverShadow": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "borderRadius": 0,
 "label": "TEXT BUTTON",
 "class": "Button",
 "height": 33,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, true, 0, null, null, false)",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "gap": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "itemThumbnailShadowVerticalLength": 3,
 "paddingTop": 10,
 "id": "ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB",
 "left": "0.35%",
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#FFFFFF",
 "scrollBarVisible": "rollOver",
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "itemPaddingRight": 3,
 "minHeight": 20,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailOpacity": 1,
 "itemLabelFontFamily": "Arial",
 "itemBorderRadius": 0,
 "paddingRight": 20,
 "minWidth": 20,
 "width": "9.952%",
 "itemOpacity": 1,
 "itemThumbnailShadowOpacity": 0.54,
 "selectedItemLabelFontColor": "#CC6600",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0.71,
 "backgroundColor": [
  "#000000"
 ],
 "itemHorizontalAlign": "center",
 "shadow": false,
 "itemBackgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "class": "ThumbnailList",
 "itemThumbnailShadowSpread": 1,
 "height": "72.881%",
 "itemThumbnailBorderRadius": 50,
 "paddingBottom": 10,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "layout": "vertical",
 "verticalAlign": "top",
 "paddingLeft": 20,
 "itemBackgroundColorRatios": [],
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist",
 "scrollBarMargin": 2,
 "itemThumbnailShadowBlurRadius": 8,
 "borderSize": 0,
 "itemLabelFontSize": 14,
 "bottom": "8.81%",
 "horizontalAlign": "left",
 "itemThumbnailHeight": 75,
 "itemVerticalAlign": "middle",
 "borderRadius": 5,
 "itemLabelFontColor": "#000000",
 "itemBackgroundColorDirection": "vertical",
 "itemLabelGap": 9,
 "itemThumbnailScaleMode": "fit_outside",
 "gap": 10,
 "itemPaddingBottom": 3,
 "scrollBarWidth": 10,
 "itemThumbnailShadow": true,
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemThumbnailWidth": 75,
 "visible": false,
 "backgroundColorRatios": [
  0
 ],
 "itemThumbnailShadowColor": "#000000"
},
{
 "itemThumbnailShadowVerticalLength": 3,
 "paddingTop": 10,
 "id": "ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4",
 "scrollBarColor": "#FFFFFF",
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "itemLabelFontStyle": "normal",
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "itemMode": "normal",
 "itemPaddingRight": 3,
 "minHeight": 1,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailOpacity": 1,
 "itemLabelFontFamily": "Arial",
 "itemBorderRadius": 0,
 "width": "99.698%",
 "paddingRight": 20,
 "backgroundColor": [
  "#000000"
 ],
 "itemOpacity": 1,
 "itemThumbnailShadowOpacity": 0.8,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0.2,
 "minWidth": 1,
 "itemPaddingLeft": 3,
 "shadow": false,
 "itemBackgroundOpacity": 0,
 "height": 122,
 "class": "ThumbnailList",
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailBorderRadius": 26,
 "paddingBottom": 10,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "layout": "horizontal",
 "verticalAlign": "top",
 "paddingLeft": 20,
 "itemBackgroundColorRatios": [],
 "backgroundColorDirection": "vertical",
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist",
 "scrollBarMargin": 2,
 "itemThumbnailShadowBlurRadius": 4,
 "borderSize": 0,
 "itemLabelFontSize": 14,
 "bottom": "5.95%",
 "horizontalAlign": "left",
 "itemThumbnailHeight": 75,
 "itemVerticalAlign": "middle",
 "borderRadius": 5,
 "itemLabelFontColor": "#FFFFFF",
 "itemBackgroundColorDirection": "vertical",
 "itemLabelGap": 5,
 "itemThumbnailScaleMode": "fit_outside",
 "gap": 10,
 "visible": false,
 "scrollBarWidth": 10,
 "itemThumbnailShadow": true,
 "data": {
  "name": "ThumbnailList1355"
 },
 "itemThumbnailWidth": 75,
 "itemPaddingBottom": 3,
 "backgroundColorRatios": [
  0
 ],
 "itemThumbnailShadowColor": "#000000"
},
{
 "itemThumbnailShadowVerticalLength": 3,
 "id": "ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F",
 "left": "0%",
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#FFFFFF",
 "width": 262,
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "itemPaddingRight": 3,
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemLabelFontFamily": "Arial",
 "itemBorderRadius": 0,
 "paddingRight": 20,
 "minWidth": 20,
 "itemThumbnailOpacity": 1,
 "itemOpacity": 1,
 "itemThumbnailShadowOpacity": 0.54,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "height": "79.493%",
 "itemHorizontalAlign": "center",
 "shadow": false,
 "itemBackgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "class": "ThumbnailList",
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailBorderRadius": 50,
 "paddingBottom": 10,
 "propagateClick": false,
 "itemBackgroundColor": [],
 "paddingLeft": 20,
 "itemPaddingTop": 3,
 "layout": "vertical",
 "verticalAlign": "top",
 "itemBackgroundColorRatios": [],
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist",
 "scrollBarMargin": 2,
 "itemThumbnailShadowBlurRadius": 8,
 "borderSize": 0,
 "itemLabelFontSize": 14,
 "bottom": "6.62%",
 "horizontalAlign": "left",
 "itemThumbnailHeight": 75,
 "itemVerticalAlign": "middle",
 "borderRadius": 5,
 "itemLabelFontColor": "#FFFFFF",
 "itemBackgroundColorDirection": "vertical",
 "itemLabelGap": 9,
 "click": "this.openLink('https://goo.gl/maps/Dt9FPoUgXumCK9SBAhttps://goo.gl/maps/Dt9FPoUgXumCK9SBA', '_blank')",
 "itemThumbnailScaleMode": "fit_outside",
 "gap": 10,
 "itemPaddingBottom": 3,
 "scrollBarWidth": 10,
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemThumbnailShadowColor": "#000000",
 "paddingTop": 10,
 "itemThumbnailShadow": true,
 "itemThumbnailWidth": 75
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "minHeight": 1,
 "paddingTop": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "toggle",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "minHeight": 1,
 "paddingTop": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "toggle",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421, this.camera_21DC290F_3055_FAD0_41B3_CD08BC417B77); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Passage Area"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0_HS_0_0.png",
      "width": 1376,
      "class": "ImageResourceLevel",
      "height": 485
     }
    ]
   },
   "pitch": -1.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -57.15,
   "hfov": 34.15,
   "distance": 50
  }
 ],
 "id": "overlay_1BE03862_0D7C_3111_418F_D2FF1A48CE90",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -57.15,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 34.15,
   "pitch": -1.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348, this.camera_21C0C923_3055_FAD1_41B9_C9EB45C1F220); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Master Bedroom 3"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0_HS_1_0.png",
      "width": 1376,
      "class": "ImageResourceLevel",
      "height": 485
     }
    ]
   },
   "pitch": -4.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 121.47,
   "hfov": 34.04,
   "distance": 50
  }
 ],
 "id": "overlay_1BDDA89D_0D7D_F133_419C_82CA660727F6",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0_HS_1_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 121.47,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 34.04,
   "pitch": -4.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0600F793_0D54_3F37_414A_B6563E52A95D, this.camera_21F67939_3055_FD30_419F_DBCF7F19F03E); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Master Bedroom 2"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0_HS_2_0.png",
      "width": 1376,
      "class": "ImageResourceLevel",
      "height": 485
     }
    ]
   },
   "pitch": -7.22,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 30.27,
   "hfov": 33.89,
   "distance": 50
  }
 ],
 "id": "overlay_1BBB4175_0D7C_33F3_41A9_2AF06AB10238",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961_0_HS_2_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 30.27,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.89,
   "pitch": -7.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84, this.camera_2122C8E3_3055_FB50_41C2_EE60BEE3A246); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Balcony "
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0_HS_0_0.png",
      "width": 1373,
      "class": "ImageResourceLevel",
      "height": 484
     }
    ]
   },
   "pitch": -8.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 17.21,
   "hfov": 33.81,
   "distance": 50
  }
 ],
 "id": "overlay_1EE144D0_0D74_5131_4193_4F04E6DD6CD0",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 17.21,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.81,
   "pitch": -8.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA, this.camera_213FD8CF_3055_FB51_41B0_96A29F09B0CB); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Living Room"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0_HS_1_0.png",
      "width": 1373,
      "class": "ImageResourceLevel",
      "height": 484
     }
    ]
   },
   "pitch": -7.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 66.7,
   "hfov": 33.88,
   "distance": 50
  }
 ],
 "id": "overlay_19C75040_0D74_D111_4187_5321C3AF6050",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0_HS_1_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 66.7,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.88,
   "pitch": -7.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Passage Area"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0_HS_2_0.png",
      "width": 1373,
      "class": "ImageResourceLevel",
      "height": 484
     }
    ]
   },
   "pitch": -6.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 109.41,
   "hfov": 33.95,
   "distance": 50
  }
 ],
 "id": "overlay_1B35F33D_0D75_F770_4164_6A3A8396633C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE_0_HS_2_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 109.41,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.95,
   "pitch": -6.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84, this.camera_217AB853_3055_FB71_41C7_CD1DC921AA15); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Living Room"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0_HS_0_0.png",
      "width": 1372,
      "class": "ImageResourceLevel",
      "height": 484
     }
    ]
   },
   "pitch": -7.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.14,
   "hfov": 33.84,
   "distance": 50
  }
 ],
 "id": "overlay_1E3A8E2B_0D6C_F117_4190_8EE742272394",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F6B41_0D54_3713_41A9_372F82D1F73A_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -2.14,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.84,
   "pitch": -7.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348, this.camera_219E397A_3055_FD33_41C3_8EA795FC9D1E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Master Bedroom"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0_HS_0_0.png",
      "width": 1371,
      "class": "ImageResourceLevel",
      "height": 482
     }
    ]
   },
   "pitch": -11.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 164.9,
   "hfov": 33.45,
   "distance": 50
  }
 ],
 "id": "overlay_17014255_0D6C_D133_4191_C7310B5DEE0C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06375ECF_0D54_312F_4177_7E285BA9D228_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 164.9,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.45,
   "pitch": -11.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA, this.camera_21764840_3055_FB4F_41B9_0565139FBB10); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Living Room"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0_HS_0_0.png",
      "width": 1372,
      "class": "ImageResourceLevel",
      "height": 484
     }
    ]
   },
   "pitch": -7.22,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 30.27,
   "hfov": 33.89,
   "distance": 50
  }
 ],
 "id": "overlay_1F27524D_0D6C_3113_41A3_56EA27728852",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_063A6D22_0D55_F311_4152_490242C3339D_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 30.27,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.89,
   "pitch": -7.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421, this.camera_212808FB_3055_FB31_41C4_A351CCDC456C); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Passage Area"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0_HS_0_0.png",
      "width": 1371,
      "class": "ImageResourceLevel",
      "height": 482
     }
    ]
   },
   "pitch": -5.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -103.41,
   "hfov": 33.94,
   "distance": 50
  }
 ],
 "id": "overlay_17B93735_0D6C_3F70_419C_3FF24B04F094",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06095AA8_0D57_D110_4187_78462FE21C2F_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -103.41,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.94,
   "pitch": -5.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA, this.camera_20AFA7C2_3055_F553_41C6_00B7868836D0); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Living Room"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0_HS_0_0.png",
      "width": 1372,
      "class": "ImageResourceLevel",
      "height": 484
     }
    ]
   },
   "pitch": -6.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.63,
   "hfov": 33.93,
   "distance": 50
  }
 ],
 "id": "overlay_18775DA7_0D74_731F_41A7_EE6B077A7807",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 1.63,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.93,
   "pitch": -6.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Kitchen"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0_HS_1_0.png",
      "width": 1372,
      "class": "ImageResourceLevel",
      "height": 484
     }
    ]
   },
   "pitch": -5.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 51.63,
   "hfov": 33.98,
   "distance": 50
  }
 ],
 "id": "overlay_18E25EBB_0D74_5177_4139_04494FC164BA",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0_HS_1_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 51.63,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.98,
   "pitch": -5.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_060232FE_0D54_56F1_4181_D161227741D2, this.camera_20A5C7AE_3055_F5D0_41C4_B80250F48988); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Master Bedroom"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0_HS_2_0.png",
      "width": 1372,
      "class": "ImageResourceLevel",
      "height": 484
     }
    ]
   },
   "pitch": -5.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -110.41,
   "hfov": 34.01,
   "distance": 50
  }
 ],
 "id": "overlay_18EBC868_0D74_5111_41A0_22D7A5FC3398",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0_HS_2_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -110.41,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 34.01,
   "pitch": -5.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06095AA8_0D57_D110_4187_78462FE21C2F, this.camera_20ABC7D5_3055_F570_4199_1F8CE5B4B9BA); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Washroom "
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0_HS_3_0.png",
      "width": 1372,
      "class": "ImageResourceLevel",
      "height": 484
     }
    ]
   },
   "pitch": -7.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 105.89,
   "hfov": 33.86,
   "distance": 50
  }
 ],
 "id": "overlay_188279E0_0D74_7311_41A1_97686CA7CE32",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0_HS_3_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 105.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.86,
   "pitch": -7.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961, this.camera_2155E7E9_3055_F553_41C0_E1A1032E725B); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Passage Area"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0_HS_4_0.png",
      "width": 1372,
      "class": "ImageResourceLevel",
      "height": 484
     }
    ]
   },
   "pitch": -3.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 171.96,
   "hfov": 34.09,
   "distance": 50
  }
 ],
 "id": "overlay_18999029_0D74_3113_41A3_494D2C8E90EF",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421_0_HS_4_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 171.96,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 34.09,
   "pitch": -3.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84, this.camera_23F2965F_3055_F771_41B5_B23D6C44C039); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Balcony "
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0_HS_0_0.png",
      "width": 1371,
      "class": "ImageResourceLevel",
      "height": 483
     }
    ]
   },
   "pitch": -7.22,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 30.27,
   "hfov": 33.89,
   "distance": 50
  }
 ],
 "id": "overlay_02252A27_0D54_D11F_4182_14DE3DA1FF12",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 30.27,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.89,
   "pitch": -7.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_063A6D22_0D55_F311_4152_490242C3339D, this.camera_23E4E672_3055_F733_41BF_F0A9C39DC8F0); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Foyer"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0_HS_1_0.png",
      "width": 1371,
      "class": "ImageResourceLevel",
      "height": 483
     }
    ]
   },
   "pitch": -7.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 166.94,
   "hfov": 33.88,
   "distance": 50
  }
 ],
 "id": "overlay_1D0186A8_0D54_D110_4193_41047CA74B40",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0_HS_1_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 166.94,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.88,
   "pitch": -7.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0602D350_0D54_F730_419C_5E869415F462, this.camera_23CCA644_3055_F757_41A3_68BCC8FA0EA5); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Kitchen"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0_HS_2_0.png",
      "width": 1371,
      "class": "ImageResourceLevel",
      "height": 483
     }
    ]
   },
   "pitch": -7.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -105.64,
   "hfov": 33.88,
   "distance": 50
  }
 ],
 "id": "overlay_1DF4B984_0D54_5311_419C_A22D898C0E52",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0_HS_2_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -105.64,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.88,
   "pitch": -7.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421, this.camera_23D99618_3055_F6FF_41C0_42B30CC743BF); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Passage Area "
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0_HS_3_0.png",
      "width": 1371,
      "class": "ImageResourceLevel",
      "height": 483
     }
    ]
   },
   "pitch": -7.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -53.89,
   "hfov": 33.84,
   "distance": 50
  }
 ],
 "id": "overlay_1DB61141_0D54_3310_4185_B30A71315DF7",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0_HS_3_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -53.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.84,
   "pitch": -7.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE, this.camera_23D365EB_3055_F551_41C0_A154EF44D02F); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Pooja Area"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0_HS_4_0.png",
      "width": 1371,
      "class": "ImageResourceLevel",
      "height": 483
     }
    ]
   },
   "pitch": -6.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -6.91,
   "hfov": 33.91,
   "distance": 50
  }
 ],
 "id": "overlay_02CBA294_0D55_D131_4191_D3962E310D4F",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06AF5325_0D54_5713_4175_9EEECAE144FA_0_HS_4_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -6.91,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.91,
   "pitch": -6.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0600F793_0D54_3F37_414A_B6563E52A95D, this.camera_2386D69A_3055_F7F3_4166_227F26607892); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Master Bedroom"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0_HS_0_0.png",
      "width": 1372,
      "class": "ImageResourceLevel",
      "height": 483
     }
    ]
   },
   "pitch": -7.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -121.73,
   "hfov": 33.85,
   "distance": 50
  }
 ],
 "id": "overlay_15E84A59_0D77_D133_4185_2A9CA7B4A61E",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -121.73,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.85,
   "pitch": -7.46
  }
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "width": 49,
 "minHeight": 1,
 "paddingTop": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "borderRadius": 0,
 "class": "IconButton",
 "height": 37,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "minHeight": 1,
 "paddingTop": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "borderRadius": 0,
 "class": "IconButton",
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "minHeight": 1,
 "paddingTop": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "toggle",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton HS "
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "minHeight": 1,
 "paddingTop": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "toggle",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961, this.camera_210278A7_3055_FBD1_419B_BB9976096BFE); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Passage Area"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0_HS_0_0.png",
      "width": 1371,
      "class": "ImageResourceLevel",
      "height": 483
     }
    ]
   },
   "pitch": -3.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -113.69,
   "hfov": 34.08,
   "distance": 50
  }
 ],
 "id": "overlay_1ADC7440_0D74_5110_41A1_32348ECFE841",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -113.69,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 34.08,
   "pitch": -3.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06026E98_0D54_5130_41A9_F8C32F3CE00D, this.camera_210978BB_3055_FB31_41C0_978CF6F4CD02); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Washroom "
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0_HS_1_0.png",
      "width": 1371,
      "class": "ImageResourceLevel",
      "height": 483
     }
    ]
   },
   "pitch": -6.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 68.19,
   "hfov": 33.92,
   "distance": 50
  }
 ],
 "id": "overlay_15D60A54_0D75_D131_419F_B6D4DA61119F",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0600F793_0D54_3F37_414A_B6563E52A95D_0_HS_1_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 68.19,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.92,
   "pitch": -6.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06037F76_0D54_EFF1_41A8_9C7B5FC04421, this.camera_232DC5B7_3055_F531_41A7_00005E0C168A); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Passage Area"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0_HS_0_0.png",
      "width": 1374,
      "class": "ImageResourceLevel",
      "height": 485
     }
    ]
   },
   "pitch": -6.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 5.9,
   "hfov": 33.95,
   "distance": 50
  }
 ],
 "id": "overlay_15C26C2E_0D74_3110_4190_D8362E187243",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060232FE_0D54_56F1_4181_D161227741D2_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 5.9,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.95,
   "pitch": -6.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_060F6B41_0D54_3713_41A9_372F82D1F73A, this.camera_23AB56D6_3055_F773_41BE_5EAA31E71969); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Balcony "
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0_HS_0_0.png",
      "width": 1371,
      "class": "ImageResourceLevel",
      "height": 484
     }
    ]
   },
   "pitch": -8.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 13.69,
   "hfov": 33.79,
   "distance": 50
  }
 ],
 "id": "overlay_1F539713_0D6C_7F37_4198_B9FA7DA344AB",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 13.69,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.79,
   "pitch": -8.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_060BC7C5_0D54_DF13_41A9_228E71EFF1EE, this.camera_238946AE_3055_F7D0_41C0_74FFB872A545); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Pooja Area"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0_HS_1_0.png",
      "width": 1371,
      "class": "ImageResourceLevel",
      "height": 484
     }
    ]
   },
   "pitch": -4.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -59.41,
   "hfov": 34.05,
   "distance": 50
  }
 ],
 "id": "overlay_1FCDCBD0_0D6F_D731_415E_628A4DD2B9C0",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0_HS_1_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -59.41,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 34.05,
   "pitch": -4.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA, this.camera_23B896C1_3055_F750_41B8_F94D150BFF61); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Living Room"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0_HS_2_0.png",
      "width": 1371,
      "class": "ImageResourceLevel",
      "height": 484
     }
    ]
   },
   "pitch": -8.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -157.39,
   "hfov": 33.79,
   "distance": 50
  }
 ],
 "id": "overlay_1E2CAEE8_0D6C_D111_4188_5CDAC6669C76",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0_HS_2_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -157.39,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.79,
   "pitch": -8.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Passage Area"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0_HS_3_0.png",
      "width": 1371,
      "class": "ImageResourceLevel",
      "height": 484
     }
    ]
   },
   "pitch": -5.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -112.42,
   "hfov": 34.01,
   "distance": 50
  }
 ],
 "id": "overlay_1E0EFEB5_0D6C_3170_4199_408809F322A8",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D4F2C_0D54_2F10_41A9_C6B8A74E2C84_0_HS_3_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -112.42,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 34.01,
   "pitch": -5.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06AF5325_0D54_5713_4175_9EEECAE144FA, this.camera_21FB494F_3055_FD51_41B4_C471CE22D9F6); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Living Room"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0_HS_0_0.png",
      "width": 1371,
      "class": "ImageResourceLevel",
      "height": 484
     }
    ]
   },
   "pitch": -4.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -103.88,
   "hfov": 34.04,
   "distance": 50
  }
 ],
 "id": "overlay_19855A77_0D74_31F0_4182_C434119C3C81",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -103.88,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 34.04,
   "pitch": -4.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_060EC68E_0D57_F111_419E_217FFFD70579, this.camera_21ECE964_3055_FD57_41A9_9C04E5909969); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Wash Area"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0_HS_1_0.png",
      "width": 1371,
      "class": "ImageResourceLevel",
      "height": 484
     }
    ]
   },
   "pitch": -3.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 105.39,
   "hfov": 34.11,
   "distance": 50
  }
 ],
 "id": "overlay_18482FAC_0D74_6F10_4153_520A245127D6",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0602D350_0D54_F730_419C_5E869415F462_0_HS_1_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 105.39,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 34.11,
   "pitch": -3.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_060C6627_0D54_511F_4197_F3F2A8E9228B, this.camera_2141C82C_3055_FAD7_41A8_FDE50A4F7911); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Master Bedroom"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0_HS_0_0.png",
      "width": 1370,
      "class": "ImageResourceLevel",
      "height": 482
     }
    ]
   },
   "pitch": -7.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -136.82,
   "hfov": 33.82,
   "distance": 50
  }
 ],
 "id": "overlay_172F6210_0D6C_5131_41A2_DE31B708CB65",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060D1181_0D54_3313_418A_2911805BC54C_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -136.82,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.82,
   "pitch": -7.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348, this.camera_215E9800_3055_FACF_41B1_052B9B1A8760); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Front View"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0_HS_0_0.png",
      "width": 1370,
      "class": "ImageResourceLevel",
      "height": 481
     }
    ]
   },
   "pitch": -7.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 54.11,
   "hfov": 33.84,
   "distance": 50
  }
 ],
 "id": "overlay_14A3413C_0D74_3371_4195_0A2607167BCC",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 54.11,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.84,
   "pitch": -7.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Washroom"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0_HS_1_0.png",
      "width": 1370,
      "class": "ImageResourceLevel",
      "height": 481
     }
    ]
   },
   "pitch": -3.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 102.09,
   "hfov": 34.05,
   "distance": 50
  }
 ],
 "id": "overlay_177B52C8_0D6C_5110_4196_EDA910DE61B8",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0_HS_1_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 102.09,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 34.05,
   "pitch": -3.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_060D1181_0D54_3313_418A_2911805BC54C, this.camera_21598815_3055_FAF1_41B4_EC4EB82943C0); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Balcony"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0_HS_2_0.png",
      "width": 1369,
      "class": "ImageResourceLevel",
      "height": 481
     }
    ]
   },
   "pitch": -9.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -56.44,
   "hfov": 33.6,
   "distance": 50
  }
 ],
 "id": "overlay_164660B7_0D6C_717F_41A0_AF7A4B54449B",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060C6627_0D54_511F_4197_F3F2A8E9228B_0_HS_2_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -56.44,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.6,
   "pitch": -9.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06021B7D_0D54_D7F3_41A1_17FEFA483961, this.camera_2116E87A_3055_FB33_41B2_544F6BC7DF21); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Passage Area"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0_HS_0_0.png",
      "width": 1372,
      "class": "ImageResourceLevel",
      "height": 483
     }
    ]
   },
   "pitch": -7.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 67.69,
   "hfov": 33.85,
   "distance": 50
  }
 ],
 "id": "overlay_15ABAE18_0D74_D131_41A3_E71C8573DCB4",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 67.69,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.85,
   "pitch": -7.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_060C6627_0D54_511F_4197_F3F2A8E9228B, this.camera_2163E866_3055_FB53_4182_60B4DDF36734); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Balcony View"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0_HS_1_0.png",
      "width": 1369,
      "class": "ImageResourceLevel",
      "height": 481
     }
    ]
   },
   "pitch": -8.69,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -53.43,
   "hfov": 33.69,
   "distance": 50
  }
 ],
 "id": "overlay_14229F43_0D74_2F17_41A9_E15C48007003",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0_HS_1_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -53.43,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.69,
   "pitch": -8.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06375ECF_0D54_312F_4177_7E285BA9D228, this.camera_211F7890_3055_FBCF_41BF_E3FF06AEA375); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Washroom"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0_HS_2_0.png",
      "width": 1370,
      "class": "ImageResourceLevel",
      "height": 482
     }
    ]
   },
   "pitch": -13.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -161.69,
   "hfov": 33.09,
   "distance": 50
  }
 ],
 "id": "overlay_14B634CF_0D74_D12F_4189_D5E6318C963E",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060F9ABD_0D54_7173_419B_D88D6FD7A348_0_HS_2_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -161.69,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.09,
   "pitch": -13.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0602D350_0D54_F730_419C_5E869415F462, this.camera_2394F686_3055_F7D3_41BA_3D47383334DB); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Kitchen"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0_HS_0_0.png",
      "width": 1369,
      "class": "ImageResourceLevel",
      "height": 481
     }
    ]
   },
   "pitch": -2.67,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 142.54,
   "hfov": 34.07,
   "distance": 50
  }
 ],
 "id": "overlay_167E4B64_0D6C_5711_41A2_9735251E9814",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_060EC68E_0D57_F111_419E_217FFFD70579_0_HS_0_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 142.54,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 34.07,
   "pitch": -2.67
  }
 ]
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "right": "0%",
 "minHeight": 1,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "bottom": 53,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "Image",
 "height": 2,
 "paddingBottom": 0,
 "data": {
  "name": "white line"
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "paddingTop": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
  "this.Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
  "this.Button_33E0F47E_11C1_A20D_419F_BB809AD89259"
 ],
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "width": 1458,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": 103,
 "paddingBottom": 0,
 "data": {
  "name": "-button set container"
 },
 "gap": 3,
 "verticalAlign": "middle",
 "paddingLeft": 30,
 "propagateClick": false,
 "layout": "horizontal",
 "paddingTop": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 110,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": 110,
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 },
 "gap": 10,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "horizontal",
 "paddingTop": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "0%",
 "contentOpaque": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "width": "91.304%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": "85.959%",
 "paddingBottom": 0,
 "data": {
  "name": "-button set"
 },
 "gap": 3,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "layout": "vertical",
 "paddingTop": 0
},
{
 "scrollBarWidth": 10,
 "id": "Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
 "left": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "width": 250,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "top": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColor": [
  "#FFCC33"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "shadow": false,
 "borderRadius": 0,
 "click": "this.openLink('http://www.shivalayluxuria.com', '_blank')",
 "class": "Container",
 "height": 49,
 "paddingBottom": 0,
 "data": {
  "name": "red block"
 },
 "gap": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0.01
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "id": "Container_33F2D10A_17CC_3D05_4199_54BCA881FB17",
 "left": "0%",
 "width": 251,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "bottom": 21,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowOpacity": 0.5,
 "shadowSpread": 1,
 "borderRadius": 0,
 "click": "this.openLink('http://www.shivalayluxuria.com', '_blank')",
 "class": "Container",
 "height": 47,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "white block"
 },
 "gap": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "paddingTop": 0
},
{
 "verticalAlign": "top",
 "fontFamily": "Oswald",
 "id": "Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
 "left": 6,
 "fontColor": "#FFFFFF",
 "width": 252,
 "textShadowHorizontalLength": 0,
 "textShadowOpacity": 1,
 "minHeight": 1,
 "text": "Shivalay Luxuria ",
 "paddingRight": 0,
 "top": 2,
 "textShadowColor": "#000000",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "fontSize": "35px",
 "backgroundOpacity": 0,
 "textShadowVerticalLength": 0,
 "shadow": false,
 "textShadowBlurRadius": 10,
 "borderRadius": 0,
 "click": "this.openLink('http://www.shivalayluxuria.com', '_blank')",
 "class": "Label",
 "height": 51,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "textDecoration": "none",
 "paddingLeft": 0,
 "propagateClick": false,
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold",
 "paddingTop": 0
},
{
 "verticalAlign": "top",
 "fontFamily": "Oswald",
 "id": "Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B",
 "left": 10,
 "fontColor": "#000000",
 "width": 309,
 "minHeight": 1,
 "text": "3BHK Sample House",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "bottom": 15,
 "fontSize": "25px",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "click": "this.openLink('http://www.shivalayluxuria.com', '_blank')",
 "class": "Label",
 "height": 46,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "paddingLeft": 0,
 "propagateClick": false,
 "data": {
  "name": "text 2"
 },
 "fontWeight": "bold",
 "paddingTop": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
  "this.Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3"
 ],
 "id": "Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
 "left": "10%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "5%",
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "bottom": "5%",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "gap": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "paddingTop": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0"
 ],
 "id": "Container_386C28AA_17CC_0B05_41B7_3334E854CA29",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "10%",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "paddingRight": 20,
 "top": "5%",
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "vertical",
 "paddingTop": 20
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_3811E7E8_17DC_0505_4189_A53F22044B22",
  "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B"
 ],
 "id": "Container_3811F7E8_17DC_0505_417B_3406AEA143C9",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "7%",
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "bottom": "7%",
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "gap": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
  "this.WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8"
 ],
 "id": "Container_2792F64D_17CC_071F_415E_8686768A06D3",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "7%",
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "bottom": "7%",
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "gap": 4,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
  "this.MapViewer"
 ],
 "id": "Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "7%",
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "bottom": "7%",
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "gap": 4,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_20EC87A3_174C_050A_4198_F9830A58FD09",
  "this.Container_2F7D65D9_1744_0506_41B3_4FD17B01B645"
 ],
 "id": "Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "7%",
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "bottom": "7%",
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "gap": 6,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
  "this.Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82"
 ],
 "id": "Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
 "left": "10%",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "top": "5%",
 "contentOpaque": false,
 "borderSize": 0,
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "bottom": "5%",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadow": true,
 "shadowVerticalLength": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "gap": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "paddingTop": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6"
 ],
 "id": "Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "10%",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "paddingRight": 20,
 "top": "5%",
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "vertical",
 "paddingTop": 20
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button house info"
 },
 "click": "this.openLink('http://www.shivalayluxuria.com', '_blank')",
 "backgroundColor": [
  "#000000"
 ],
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "width": 131,
 "fontColor": "#FFFFFF",
 "iconWidth": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "iconHeight": 0,
 "paddingRight": 0,
 "borderColor": "#000000",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadowOpacity": 0,
 "shadow": true,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "label": "Project Information ",
 "class": "Button",
 "height": 40,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "gap": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingTop": 0,
 "iconURL": "skin/Button_03D37B27_0C7A_63B3_41A1_89572D8C8762.png",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button panorama list"
 },
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "width": 140,
 "shadowSpread": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 64,
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "iconBeforeLabel": true,
 "iconHeight": 64,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderColor": "#000000",
 "borderSize": 0,
 "shadowBlurRadius": 15,
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "push",
 "fontSize": 18,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "borderRadius": 0,
 "class": "Button",
 "height": 67,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "gap": 5,
 "verticalAlign": "middle",
 "propagateClick": false,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD.png",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button location"
 },
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "width": 100,
 "shadowSpread": 1,
 "fontColor": "#FFFFFF",
 "iconWidth": 64,
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 64,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "borderColor": "#000000",
 "borderSize": 0,
 "shadowBlurRadius": 15,
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "push",
 "iconBeforeLabel": true,
 "fontSize": 18,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "borderRadius": 0,
 "class": "Button",
 "height": 62,
 "click": "this.openLink('https://www.facebook.com/ShivalayLuxuria?mibextid=ZbWKwL', '_blank')",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "gap": 5,
 "verticalAlign": "middle",
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD.png",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button floorplan"
 },
 "click": "this.openLink('https://instagram.com/shivalayluxuria_4583?igshid=OGQ2MjdiOTE=', '_blank')",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "width": 113,
 "fontColor": "#FFFFFF",
 "iconWidth": 64,
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "iconHeight": 64,
 "paddingRight": 0,
 "borderColor": "#000000",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "mode": "push",
 "fontSize": 18,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadowOpacity": 0,
 "shadow": true,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "class": "Button",
 "height": 64,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "gap": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "rollOverFontColor": "#FFFFFF",
 "paddingTop": 0,
 "iconURL": "skin/Button_1FE4B611_0C0A_256F_418E_EA27E66F8360.jpg",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button photoalbum"
 },
 "click": "this.openLink('files/file_2FC8380F_0D5C_312F_41A4_7EABE69CA5BC.pdf', '_blank')",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "width": 173,
 "fontColor": "#FFFFFF",
 "iconWidth": 64,
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "iconHeight": 64,
 "paddingRight": 0,
 "borderColor": "#000000",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "mode": "push",
 "fontSize": 18,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadowOpacity": 0,
 "shadow": true,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "label": " Brochure",
 "class": "Button",
 "height": 65,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "gap": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "rollOverFontColor": "#FFFFFF",
 "paddingTop": 0,
 "iconURL": "skin/Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5.jpg",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button contact"
 },
 "click": "this.openLink('http://api.whatsapp.com/send?phone=+919998334583', '_blank')",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "id": "Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "width": 119,
 "fontColor": "#FFFFFF",
 "iconWidth": 64,
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "iconHeight": 64,
 "paddingRight": 0,
 "borderColor": "#000000",
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "mode": "push",
 "fontSize": "18px",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadowOpacity": 0,
 "shadow": true,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "class": "Button",
 "height": 67,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "gap": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingTop": 0,
 "iconURL": "skin/Button_33E0F47E_11C1_A20D_419F_BB809AD89259.png",
 "pressedBackgroundOpacity": 1
},
{
 "transparencyActive": true,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "minHeight": 1,
 "paddingTop": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "toggle",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "height": 60,
 "paddingBottom": 0,
 "data": {
  "name": "image button menu"
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "minHeight": 1,
 "paddingTop": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "borderRadius": 0,
 "click": "this.shareTwitter(window.location.href)",
 "class": "IconButton",
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "minHeight": 1,
 "paddingTop": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "borderRadius": 0,
 "click": "this.shareFacebook(window.location.href)",
 "class": "IconButton",
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FB"
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
  "this.Container_386D68AA_17CC_0B05_41B3_8E850505A16B"
 ],
 "height": "100%",
 "id": "Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "width": "85%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "gap": 10,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
  "this.Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
  "this.Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF"
 ],
 "height": "100%",
 "id": "Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 50,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "minWidth": 460,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "width": "50%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "gap": 0,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "paddingLeft": 50,
 "paddingTop": 20,
 "propagateClick": false
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0",
 "paddingTop": 0,
 "width": "25%",
 "minHeight": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 40,
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_rollover.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_pressed.jpg",
 "height": "75%",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0.jpg"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
  "this.IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E"
 ],
 "id": "Container_3811E7E8_17DC_0505_4189_A53F22044B22",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "width": "100%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": 80,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "gap": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "itemMaxWidth": 1000,
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B",
 "scrollBarColor": "#FF361B",
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "itemLabelFontStyle": "normal",
 "scrollBarVisible": "rollOver",
 "rollOverItemLabelFontSize": 16,
 "itemMode": "normal",
 "itemPaddingRight": 3,
 "minHeight": 1,
 "rollOverItemThumbnailShadowColor": "#FF361B",
 "itemThumbnailOpacity": 1,
 "itemLabelFontFamily": "Oswald Regular",
 "itemMaxHeight": 1000,
 "itemBorderRadius": 0,
 "paddingRight": 70,
 "minWidth": 1,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "width": "100%",
 "itemOpacity": 1,
 "selectedItemLabelFontColor": "#C1280E",
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundOpacity": 0,
 "height": "100%",
 "itemHorizontalAlign": "center",
 "shadow": false,
 "itemBackgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "class": "ThumbnailGrid",
 "itemThumbnailBorderRadius": 0,
 "paddingBottom": 70,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "paddingLeft": 70,
 "verticalAlign": "middle",
 "itemBackgroundColorRatios": [],
 "propagateClick": false,
 "itemWidth": 220,
 "itemMinHeight": 50,
 "selectedItemLabelFontSize": 16,
 "selectedItemThumbnailShadow": true,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#C1280E",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "itemLabelFontSize": 16,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "horizontalAlign": "center",
 "itemMinWidth": 50,
 "itemVerticalAlign": "top",
 "itemHeight": 160,
 "itemThumbnailHeight": 125,
 "itemThumbnailScaleMode": "fit_outside",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "borderRadius": 5,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "itemLabelGap": 7,
 "data": {
  "name": "ThumbnailList5161"
 },
 "gap": 26,
 "itemPaddingBottom": 3,
 "scrollBarWidth": 10,
 "itemThumbnailShadow": false,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "paddingTop": 30,
 "itemThumbnailWidth": 220
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
  "this.IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14"
 ],
 "id": "Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "width": "100%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": 80,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "gap": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "id": "WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "minHeight": 1,
 "scrollEnabled": true,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14376.151861634273!2d-73.99351941263586!3d40.75732561349075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses!2ses!4v1542287427714\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundOpacity": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame52781"
 },
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
  "this.IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14"
 ],
 "id": "Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "width": "100%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": 80,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "gap": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 1,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "shadow": false,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "paddingBottom": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Floor Plan"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
  "this.IconButton_20ECE7A3_174C_050A_41B4_AF609035102C"
 ],
 "id": "Container_20EC87A3_174C_050A_4198_F9830A58FD09",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "minWidth": 1,
 "width": "100%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": 80,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "gap": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
  "this.Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0"
 ],
 "height": "100%",
 "id": "Container_2F7D65D9_1744_0506_41B3_4FD17B01B645",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "width": "100%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "-photoalbum"
 },
 "gap": 10,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_182FD4E7_17B7_EF41_41AA_D495544C1972"
 ],
 "height": "100%",
 "id": "Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "width": "85%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "gap": 10,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
  "this.Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
  "this.Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353"
 ],
 "height": "100%",
 "id": "Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 50,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "minWidth": 460,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "width": "50%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "gap": 0,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "paddingLeft": 50,
 "paddingTop": 20,
 "propagateClick": false
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6",
 "paddingTop": 0,
 "width": "25%",
 "minHeight": 40,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 40,
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_rollover.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_pressed.jpg",
 "height": "75%",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6.jpg"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
 "left": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "right": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "shadow": false,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "paddingBottom": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "bottom": 0,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Viewer info 1"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
  "this.Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
  "this.IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6"
 ],
 "id": "Container_386D68AA_17CC_0B05_41B3_8E850505A16B",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Container arrows"
 },
 "gap": 10,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "horizontal",
 "paddingTop": 0
},
{
 "scrollBarWidth": 10,
 "id": "Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "width": "100%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": 60,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "gap": 0,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "paddingTop": 20,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
  "this.Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4"
 ],
 "height": "100%",
 "id": "Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "minWidth": 100,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "gap": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "id": "Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "width": 370,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": 40,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "gap": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "id": "HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingRight": 0,
 "top": "0%",
 "width": "77.115%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.64vh;font-family:'Oswald';\"><B>PANORAMA LIST/</B></SPAN></SPAN></DIV></div>",
 "height": 80,
 "paddingBottom": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingLeft": 80,
 "propagateClick": false,
 "paddingTop": 17
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E",
 "paddingTop": 0,
 "right": 15,
 "width": 50,
 "minHeight": 40,
 "paddingRight": 0,
 "top": 15,
 "borderSize": 0,
 "minWidth": 40,
 "horizontalAlign": "right",
 "mode": "push",
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_rollover.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_pressed.jpg",
 "height": 50,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "verticalAlign": "top",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E.jpg"
},
{
 "scrollBarWidth": 10,
 "id": "HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingRight": 0,
 "top": "0%",
 "width": "77.115%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.64vh;font-family:'Oswald';\"><B>LOCATION/</B></SPAN></SPAN></DIV></div>",
 "height": 80,
 "paddingBottom": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingLeft": 80,
 "propagateClick": false,
 "paddingTop": 17
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14",
 "paddingTop": 0,
 "right": 15,
 "width": 70,
 "minHeight": 40,
 "paddingRight": 0,
 "top": 15,
 "borderSize": 0,
 "minWidth": 40,
 "horizontalAlign": "right",
 "mode": "push",
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_rollover.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_pressed.jpg",
 "height": 70,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "verticalAlign": "top",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14.jpg"
},
{
 "scrollBarWidth": 10,
 "id": "HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingRight": 0,
 "top": "0%",
 "width": "77.115%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.64vh;font-family:'Oswald';\"><B>FLOORPLAN/</B></SPAN></SPAN></DIV></div>",
 "height": 80,
 "paddingBottom": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingLeft": 80,
 "propagateClick": false,
 "paddingTop": 17
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14",
 "paddingTop": 0,
 "right": 15,
 "width": 70,
 "minHeight": 40,
 "paddingRight": 0,
 "top": 15,
 "borderSize": 0,
 "minWidth": 40,
 "horizontalAlign": "right",
 "mode": "push",
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_rollover.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_pressed.jpg",
 "height": 70,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "verticalAlign": "top",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14.jpg"
},
{
 "scrollBarWidth": 10,
 "id": "HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingRight": 0,
 "top": "0%",
 "width": "77.115%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.64vh;font-family:'Oswald';\"><B>PHOTOALBUM/</B></SPAN></SPAN></DIV></div>",
 "height": 80,
 "paddingBottom": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingLeft": 80,
 "propagateClick": false,
 "paddingTop": 17
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_20ECE7A3_174C_050A_41B4_AF609035102C",
 "paddingTop": 0,
 "right": 15,
 "width": 50,
 "minHeight": 40,
 "paddingRight": 0,
 "top": 15,
 "borderSize": 0,
 "minWidth": 40,
 "horizontalAlign": "right",
 "mode": "push",
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_rollover.jpg",
 "borderRadius": 0,
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_pressed.jpg",
 "height": 50,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "verticalAlign": "top",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C.jpg"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
 "left": 0,
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "right": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "shadow": false,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "class": "ViewerArea",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "paddingBottom": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "borderSize": 0,
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "bottom": 0,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Viewer photoalbum"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
  "this.Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
  "this.IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33"
 ],
 "id": "Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Container arrows"
 },
 "gap": 10,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "horizontal",
 "paddingTop": 0
},
{
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_182FD4E7_17B7_EF41_41AA_D495544C1972",
 "left": "0%",
 "width": "100%",
 "minHeight": 1,
 "url": "skin/Image_182FD4E7_17B7_EF41_41AA_D495544C1972.jpg",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "Image",
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Image5820"
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "paddingTop": 0
},
{
 "scrollBarWidth": 10,
 "id": "Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "width": "100%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": 50,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "gap": 0,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "paddingTop": 20,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
  "this.Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
  "this.Button_1830D20E_17B1_6AC3_4198_688BED36E073"
 ],
 "height": "100%",
 "id": "Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "minWidth": 100,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 30,
 "data": {
  "name": "-Container text"
 },
 "gap": 25,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "id": "Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "width": 370,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": 40,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "gap": 10,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "transparencyActive": true,
 "maxHeight": 130,
 "maxWidth": 130,
 "id": "IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
 "paddingTop": 0,
 "width": "8%",
 "minHeight": 70,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 70,
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_rollover.png",
 "borderRadius": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_pressed.png",
 "height": "8%",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton left arrow"
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D.png"
},
{
 "id": "Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "width": "84%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": "30%",
 "paddingBottom": 0,
 "data": {
  "name": "Container separator"
 },
 "gap": 10,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "propagateClick": false
},
{
 "transparencyActive": true,
 "maxHeight": 130,
 "maxWidth": 130,
 "id": "IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6",
 "paddingTop": 0,
 "width": "8%",
 "minHeight": 70,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 70,
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_rollover.png",
 "borderRadius": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_pressed.png",
 "height": "8%",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton right arrow"
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6.png"
},
{
 "id": "HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
 "scrollBarColor": "#FF361B",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.62vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.76vh;font-family:'Oswald Regular';\">Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae bibendum.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "height": "100%",
 "paddingBottom": 20,
 "data": {
  "name": "HTMLText"
 },
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button31015"
 },
 "shadowSpread": 1,
 "id": "Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Bebas Neue Bold",
 "width": 207,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "iconBeforeLabel": true,
 "iconHeight": 32,
 "paddingRight": 0,
 "borderColor": "#000000",
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#FF361B"
 ],
 "horizontalAlign": "center",
 "mode": "push",
 "fontSize": "3.7vh",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 1,
 "minWidth": 1,
 "shadow": false,
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "borderRadius": 0,
 "label": "lorem ipsum",
 "class": "Button",
 "height": 59,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "gap": 5,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 0,
 "cursor": "hand",
 "propagateClick": false,
 "pressedBackgroundOpacity": 1
},
{
 "transparencyActive": true,
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
 "paddingTop": 0,
 "width": "10%",
 "minHeight": 70,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 70,
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_rollover.png",
 "borderRadius": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_pressed.png",
 "height": "10%",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton left arrow"
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F.png"
},
{
 "id": "Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "width": "80%",
 "shadow": false,
 "borderRadius": 0,
 "class": "Container",
 "height": "30%",
 "paddingBottom": 0,
 "data": {
  "name": "Container separator"
 },
 "gap": 10,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "propagateClick": false
},
{
 "transparencyActive": true,
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33",
 "paddingTop": 0,
 "width": "10%",
 "minHeight": 70,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 70,
 "horizontalAlign": "center",
 "mode": "push",
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_rollover.png",
 "borderRadius": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_pressed.png",
 "height": "10%",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton right arrow"
 },
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33.png"
},
{
 "id": "HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
 "scrollBarColor": "#FF361B",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:4.41vh;font-family:'Oswald';\"><B>______</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.62vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.76vh;font-family:'Oswald Regular';\"><B>Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.21vh;font-family:'Oswald';\"><B>www.loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.21vh;font-family:'Oswald';\"><B>info@loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.21vh;font-family:'Oswald';\"><B>Tlf.: +11 111 111 111</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.21vh;font-family:'Oswald';\"><B>Address line 1</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.21vh;font-family:'Oswald';\"><B>Address line 2</B></SPAN></SPAN></DIV></div>",
 "height": "62.894%",
 "paddingBottom": 3,
 "data": {
  "name": "HTMLText"
 },
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "propagateClick": false
},
{
 "maxHeight": 120,
 "maxWidth": 211,
 "id": "Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
 "width": "70%",
 "minHeight": 1,
 "url": "skin/Image_16B75461_1B87_4970_41B9_4F94F65FB1C1.jpg",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "class": "Image",
 "height": "30%",
 "paddingBottom": 0,
 "data": {
  "name": "Image logo"
 },
 "verticalAlign": "top",
 "paddingLeft": 0,
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0
},
{
 "textDecoration": "none",
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button Contact"
 },
 "shadowSpread": 1,
 "id": "Button_1830D20E_17B1_6AC3_4198_688BED36E073",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald Regular",
 "width": 140,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 32,
 "paddingRight": 0,
 "borderColor": "#000000",
 "borderSize": 0,
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#FF361B"
 ],
 "horizontalAlign": "center",
 "mode": "push",
 "iconBeforeLabel": true,
 "fontSize": "2.83vh",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 1,
 "minWidth": 1,
 "shadow": false,
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "borderRadius": 0,
 "label": "CONTACT",
 "class": "Button",
 "height": 59,
 "click": "this.openLink('http://www.loremipsum.com', '_blank')",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "gap": 5,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 0,
 "cursor": "hand",
 "propagateClick": false,
 "pressedBackgroundOpacity": 1
}],
 "scrollBarWidth": 10,
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
  "this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
  "this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
  "this.Container_2792A64E_17CC_071D_41B0_BEA23997C067",
  "this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
  "this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
  "this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
  "this.Button_0B89499F_06C8_BD46_4189_ED238C875508",
  "this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB",
  "this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4",
  "this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "overflow": "visible",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist,this.ThumbnailList_12282C07_0D5C_511F_41A4_0DF026A49EFB_playlist,this.ThumbnailList_280A4788_0DAC_FF11_41A6_A4B3668CD4F4_playlist,this.ThumbnailList_2B78F5E8_0DB4_F311_41A1_60C49D1C8D5F_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "unregisterKey": function(key){  delete window[key]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "minWidth": 20,
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "downloadEnabled": false,
 "contentOpaque": false,
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "borderRadius": 0,
 "class": "Player",
 "paddingBottom": 0,
 "width": "100%",
 "mouseWheelEnabled": true,
 "gap": 10,
 "verticalAlign": "top",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "desktopMipmappingEnabled": false,
 "paddingLeft": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "layout": "absolute"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
