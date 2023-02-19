(function(){
    var script = {
 "verticalAlign": "top",
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 102.13,
  "class": "PanoramaCameraPosition",
  "pitch": 2.98
 },
 "id": "panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 4.28,
  "class": "PanoramaCameraPosition",
  "pitch": -0.7
 },
 "id": "panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 79.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0857FF91_114D_E62C_41AA_195F302ADCF4"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -145.19,
   "yaw": 125.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232"
  },
  {
   "backwardYaw": 71.47,
   "yaw": -47.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD"
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
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/f/0/{row}_{column}.jpg",
      "rowCount": 10,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "height": 5120
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/u/0/{row}_{column}.jpg",
      "rowCount": 10,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "height": 5120
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/r/0/{row}_{column}.jpg",
      "rowCount": 10,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "height": 5120
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/b/0/{row}_{column}.jpg",
      "rowCount": 10,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "height": 5120
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/d/0/{row}_{column}.jpg",
      "rowCount": 10,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "height": 5120
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/l/0/{row}_{column}.jpg",
      "rowCount": 10,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "height": 5120
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_t.jpg"
  }
 ],
 "partial": false,
 "label": "Master Bedroom 1",
 "id": "panorama_14CA2346_06C9_AD39_4190_C2542FB00654",
 "thumbnailUrl": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_t.jpg",
 "overlays": [
  "this.overlay_24336BC6_06C8_BD39_4192_0EB40A6CEA81",
  "this.overlay_258F0C80_06B8_9B39_417C_411BE797AAD0"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1427B418_06FB_AB4A_4184_55EE183B1A74"
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
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_t.jpg"
  }
 ],
 "partial": false,
 "label": "Balcony",
 "id": "panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018",
 "thumbnailUrl": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_t.jpg",
 "overlays": [
  "this.overlay_1C4CF313_06C9_ED5F_4197_15028254555C"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -40.6,
   "yaw": 22.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CFE800_06C9_BB39_418E_7A9053E21700"
  },
  {
   "backwardYaw": -20.46,
   "yaw": -156.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A"
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
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_t.jpg"
  }
 ],
 "partial": false,
 "label": "Master Bedroom 2",
 "id": "panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C",
 "thumbnailUrl": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_t.jpg",
 "overlays": [
  "this.overlay_1B0C3FB0_06D9_9559_417A_ADF41A09FB1E",
  "this.overlay_18D69D69_06D8_B5CB_4193_1DF91467A952"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -131.12,
  "class": "PanoramaCameraPosition",
  "hfov": 129,
  "pitch": 1.11
 },
 "id": "panorama_14DD698C_06D7_9D49_4186_D672701EEC61_camera"
},
{
 "items": [
  {
   "media": "this.panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1427B418_06FB_AB4A_4184_55EE183B1A74",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CA2346_06C9_AD39_4190_C2542FB00654",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_14CA2346_06C9_AD39_4190_C2542FB00654_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CFE800_06C9_BB39_418E_7A9053E21700",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_14CFE800_06C9_BB39_418E_7A9053E21700_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14C9D638_06C8_9749_4195_A6D27474D8BA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14DD698C_06D7_9D49_4186_D672701EEC61",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_14DD698C_06D7_9D49_4186_D672701EEC61_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CC863B_06C8_774F_4168_3588241E34B2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_14CC863B_06C8_774F_4168_3588241E34B2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CA1196_06C8_ED59_4162_348214BD62D8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_14CA1196_06C8_ED59_4162_348214BD62D8_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "camera": "this.panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "camera": "this.panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 0)",
   "camera": "this.panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_camera",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -157.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D16CE88_114D_E63B_41B1_2E38EFAC009A"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -88.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D605E58_114D_E6DC_41A9_16A36141FE45"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -22.78,
  "class": "PanoramaCameraPosition",
  "pitch": -0.9
 },
 "id": "panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -95.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09BCBF72_114D_E6EF_419B_6B40C6C6360A"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -100.37,
   "yaw": 10.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD"
  },
  {
   "backwardYaw": 73.16,
   "yaw": -75.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A"
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
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_t.jpg"
  }
 ],
 "partial": false,
 "label": "Balcony",
 "id": "panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF",
 "thumbnailUrl": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_t.jpg",
 "overlays": [
  "this.overlay_1806062F_06D9_9747_4192_5FB430E63030",
  "this.overlay_24358B99_06D7_BD4B_416C_0675F9773BDE"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -51.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0DBF5ED6_114D_E7D7_41B0_7AF7EDE174A3"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -161.91,
   "yaw": 91.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950"
  },
  {
   "backwardYaw": 159.64,
   "yaw": -92.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232"
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
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_t.jpg"
  }
 ],
 "partial": false,
 "label": "Pooja Area",
 "id": "panorama_14CC863B_06C8_774F_4168_3588241E34B2",
 "thumbnailUrl": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_t.jpg",
 "overlays": [
  "this.overlay_1F82ED08_06CB_9549_4174_7C7F5A3163AB",
  "this.overlay_1FDCEEC8_06C8_B4C9_4176_65DC9E04CDD8"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 175.2,
  "class": "PanoramaCameraPosition",
  "pitch": -30.89
 },
 "id": "panorama_14CA1196_06C8_ED59_4162_348214BD62D8_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 104.13,
   "yaw": 48.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950"
  },
  {
   "backwardYaw": 46.08,
   "yaw": 123.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "label": "Kitchen",
 "id": "panorama_14DD698C_06D7_9D49_4186_D672701EEC61",
 "thumbnailUrl": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_t.jpg"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_1EBB155C_06C9_95C9_4157_ADA36A45563C",
  "this.overlay_1E08809D_06C8_AB4A_4181_33B5333B69BC"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -20.53,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": -2.17
 },
 "id": "panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 60.46,
  "class": "PanoramaCameraPosition",
  "pitch": -22.44
 },
 "id": "panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 174.35,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 0
 },
 "id": "camera_0C6D6EE5_114D_E7F4_41A7_28B9F90BD6E6"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 48.11,
   "yaw": 104.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14DD698C_06D7_9D49_4186_D672701EEC61"
  },
  {
   "backwardYaw": 91.07,
   "yaw": -161.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CC863B_06C8_774F_4168_3588241E34B2"
  },
  {
   "backwardYaw": -49.4,
   "yaw": 48.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA"
  },
  {
   "backwardYaw": 91.31,
   "yaw": 2.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1427B418_06FB_AB4A_4184_55EE183B1A74"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "label": "Dining Area",
 "id": "panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950",
 "thumbnailUrl": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_t.jpg"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_130D5F6B_06FF_95CF_4175_3E8F62850FA0",
  "this.overlay_105AE7F5_06F9_F4DB_4191_FEED82F73C1F",
  "this.overlay_10695C5F_06F9_9BC6_4186_D073F14AAEBE",
  "this.overlay_103280F8_06F8_6CC9_4176_041905041EA0"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -131.89,
  "class": "PanoramaCameraPosition",
  "hfov": 129,
  "pitch": 0
 },
 "id": "camera_0D562E49_114D_E63D_41A9_BB5F0A5D766E"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -71.76,
  "class": "PanoramaCameraPosition",
  "pitch": -44.44
 },
 "id": "panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 123.73,
   "yaw": 46.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14DD698C_06D7_9D49_4186_D672701EEC61"
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
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_t.jpg"
  }
 ],
 "partial": false,
 "label": "Wash Area",
 "id": "panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A",
 "thumbnailUrl": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_t.jpg",
 "overlays": [
  "this.overlay_2E4AF0F2_06B8_ACD9_418E_FFC5EDBFE33A"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 21.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08403F72_114D_E6EF_419C_15CD6AE88537"
},
{
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -20.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0DE67EB6_114D_E654_41AB_FF8D9B0D7586"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 159.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C1ADF05_114D_E635_4190_776B5FCE2FCB"
},
{
 "items": [
  {
   "media": "this.panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 0, 1)",
   "camera": "this.panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1427B418_06FB_AB4A_4184_55EE183B1A74",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 1, 2)",
   "camera": "this.panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CA2346_06C9_AD39_4190_C2542FB00654",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 2, 3)",
   "camera": "this.panorama_14CA2346_06C9_AD39_4190_C2542FB00654_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CFE800_06C9_BB39_418E_7A9053E21700",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 3, 4)",
   "camera": "this.panorama_14CFE800_06C9_BB39_418E_7A9053E21700_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14C9D638_06C8_9749_4195_A6D27474D8BA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 4, 5)",
   "camera": "this.panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14DD698C_06D7_9D49_4186_D672701EEC61",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 5, 6)",
   "camera": "this.panorama_14DD698C_06D7_9D49_4186_D672701EEC61_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CC863B_06C8_774F_4168_3588241E34B2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 6, 7)",
   "camera": "this.panorama_14CC863B_06C8_774F_4168_3588241E34B2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 7, 8)",
   "camera": "this.panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 8, 9)",
   "camera": "this.panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 9, 10)",
   "camera": "this.panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CA1196_06C8_ED59_4162_348214BD62D8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 10, 11)",
   "camera": "this.panorama_14CA1196_06C8_ED59_4162_348214BD62D8_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 11, 12)",
   "camera": "this.panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 12, 13)",
   "camera": "this.panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 13, 14)",
   "camera": "this.panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 14, 15)",
   "camera": "this.panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 15, 16)",
   "camera": "this.panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 16, 17)",
   "camera": "this.panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 17, 18)",
   "camera": "this.panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 18, 19)",
   "camera": "this.panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 19, 0)",
   "camera": "this.panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 159.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D21BE97_114D_E654_41A6_2D09462E97B9"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -106.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08514F82_114D_E62F_4131_4C976C61ACE8"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 151.21,
  "class": "PanoramaCameraPosition",
  "pitch": -31.07
 },
 "id": "panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -56.27,
  "class": "PanoramaCameraPosition",
  "hfov": 129,
  "pitch": 0
 },
 "id": "camera_08465F82_114D_E62F_41AD_23BC6F14EF59"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 23.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C38FF05_114D_E635_418D_4EFDC14BBE46"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -158.4,
   "yaw": 18.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA"
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
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_t.jpg"
  }
 ],
 "partial": false,
 "label": "Washroom",
 "id": "panorama_14CA1196_06C8_ED59_4162_348214BD62D8",
 "thumbnailUrl": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_t.jpg",
 "overlays": [
  "this.overlay_1B37E441_06D8_6B3B_416A_A3319E4B814A"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 38.87,
  "class": "PanoramaCameraPosition",
  "pitch": -38.05
 },
 "id": "panorama_14CFE800_06C9_BB39_418E_7A9053E21700_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 84.03,
   "yaw": 159.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA"
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
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_t.jpg"
  }
 ],
 "partial": false,
 "label": "Master Bedroom 3",
 "id": "panorama_14C9D638_06C8_9749_4195_A6D27474D8BA",
 "thumbnailUrl": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_t.jpg",
 "overlays": [
  "this.overlay_1A517D1E_06D8_B549_4194_C329AC0598F9"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323000,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -75.87,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 0
 },
 "id": "camera_0D7DDE78_114D_E6DB_41B1_1B7AAF25D9AF"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -121.7,
  "class": "PanoramaCameraPosition",
  "pitch": -38.58
 },
 "id": "panorama_14CA2346_06C9_AD39_4190_C2542FB00654_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.39,
   "yaw": 91.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14DD698C_06D7_9D49_4186_D672701EEC61"
  },
  {
   "backwardYaw": -5.65,
   "yaw": -100.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9"
  },
  {
   "backwardYaw": -0.39,
   "yaw": -16.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA"
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
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_t.jpg"
  }
 ],
 "partial": false,
 "label": "Living Room",
 "id": "panorama_1427B418_06FB_AB4A_4184_55EE183B1A74",
 "thumbnailUrl": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_t.jpg",
 "overlays": [
  "this.overlay_22555618_06BB_9749_417C_C170499FF91A",
  "this.overlay_222E9A04_06B8_BF39_4191_3050679DE71C",
  "this.overlay_23E92E12_06B8_9759_4185_17B1B0134193",
  "this.overlay_200E54A2_06B8_6B79_4183_9864B8898065"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323000,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 18.09,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 0
 },
 "id": "camera_0DF5AEB6_114D_E654_418A_28419703F85E"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 163.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0CD6DF14_114D_E654_41A9_D955D8A7591C"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -28.88,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 1.36
 },
 "id": "panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 34.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D394EA7_114D_E675_41A3_D18CD3D01F59"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 17.45,
   "yaw": -20.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CFE800_06C9_BB39_418E_7A9053E21700"
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
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_t.jpg"
  }
 ],
 "partial": false,
 "label": "Washroom",
 "id": "panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D",
 "thumbnailUrl": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_t.jpg",
 "overlays": [
  "this.overlay_2E419335_0748_6D5B_4178_2831679A064D"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323000,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 16.07,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 2.49
 },
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "yaw": 16.07,
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "pitch": -90
 },
 "id": "panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear",
   "duration": 1000
  },
  {
   "targetPitch": 2.49,
   "targetHfov": 130,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -54.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C4E9EE5_114D_E7F4_4186_4E73EEC3ABCD"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -88.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D745E6F_114D_E6F4_41A2_7925797F3E5C"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -1.93,
  "class": "PanoramaCameraPosition",
  "pitch": -41.9
 },
 "id": "panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -161.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0DD60EA7_114D_E675_41B0_35306EA65317"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 4.26,
  "class": "PanoramaCameraPosition",
  "pitch": -90
 },
 "id": "panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -32.97,
  "class": "PanoramaCameraPosition",
  "pitch": -34.29
 },
 "id": "panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -169.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0CE64F24_114D_E66B_417E_5D9E99F36594"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -139.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_085C4F91_114D_E62C_4163_35CF298A6984"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 118.41,
  "class": "PanoramaCameraPosition",
  "pitch": -36.05
 },
 "id": "panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -68.97,
   "yaw": 40.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2"
  },
  {
   "backwardYaw": -92.32,
   "yaw": 159.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CC863B_06C8_774F_4168_3588241E34B2"
  },
  {
   "backwardYaw": 128.24,
   "yaw": -73.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CFE800_06C9_BB39_418E_7A9053E21700"
  },
  {
   "backwardYaw": 125.48,
   "yaw": -145.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CA2346_06C9_AD39_4190_C2542FB00654"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14C9D638_06C8_9749_4195_A6D27474D8BA"
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
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_t.jpg"
  }
 ],
 "partial": false,
 "label": "Passge Area",
 "id": "panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232",
 "thumbnailUrl": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_t.jpg",
 "overlays": [
  "this.overlay_1C5C1CA6_06C8_9B79_4170_8A98BEE639D2",
  "this.overlay_1ADD8AED_06CB_BCCB_4177_8ACF90F84508",
  "this.overlay_1B803DF6_06C8_94D9_418D_DCFC41C4DC8F",
  "this.overlay_1B281097_06C8_EB47_4181_C156C01CBEF2",
  "this.overlay_1D7A7D03_06C8_753F_417D_E859CC689EE2"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 179.61,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 0
 },
 "id": "camera_0C7C8EF5_114D_E7D5_41AD_BC240E056F50"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -169.38,
  "class": "PanoramaCameraPosition",
  "pitch": -25.66
 },
 "id": "panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 48.11,
   "yaw": -49.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018"
  },
  {
   "backwardYaw": -16.21,
   "yaw": -0.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1427B418_06FB_AB4A_4184_55EE183B1A74"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "label": "Balcony View",
 "id": "panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA",
 "thumbnailUrl": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_t.jpg"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_1F58BD24_06C8_757A_4182_E6F39CFEB38B",
  "this.overlay_1C78FBD2_06C8_7CD9_418C_C0A3FD49C015",
  "this.overlay_1AB6B0E0_06CF_ACF9_4192_DDD1D0357BAB"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 40.57,
   "yaw": -68.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232"
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
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_t.jpg"
  }
 ],
 "partial": false,
 "label": "Washroom",
 "id": "panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2",
 "thumbnailUrl": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_t.jpg",
 "overlays": [
  "this.overlay_2C8C806C_06B8_6BC9_415F_A184C4648808"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 132.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09B8FF62_114D_E6EC_418F_70A875B0DB98"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 87.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0DB09ED6_114D_E7D7_417E_6BC129F89FA8"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323000,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -131.89,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 0
 },
 "id": "camera_0CC81F14_114D_E654_41A0_2DB34B24D315"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 139.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C0B6EF5_114D_E7D5_4199_209CC77EAEEF"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 22.73,
   "yaw": -40.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C"
  },
  {
   "backwardYaw": -20.46,
   "yaw": 17.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D"
  },
  {
   "backwardYaw": -73.93,
   "yaw": 128.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232"
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
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_t.jpg"
  }
 ],
 "partial": false,
 "label": "Master Bedroom 2",
 "id": "panorama_14CFE800_06C9_BB39_418E_7A9053E21700",
 "thumbnailUrl": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_t.jpg",
 "overlays": [
  "this.overlay_257D8CA6_06B9_9B46_4196_A13F066FBAAA",
  "this.overlay_224B46E5_06B8_74FB_4173_D3D72C87A3D1",
  "this.overlay_2041AA93_06B8_BF5F_417B_C984F193081F"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -75.81,
   "yaw": 73.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF"
  },
  {
   "backwardYaw": -156.39,
   "yaw": -20.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C"
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
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_t.jpg"
  }
 ],
 "partial": false,
 "label": "Balcony",
 "id": "panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A",
 "thumbnailUrl": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_t.jpg",
 "overlays": [
  "this.overlay_18D392A5_06DB_EF7A_416C_68691CBB20AA",
  "this.overlay_180ACC10_06D8_BB59_4183_D4A98193CB17"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 106.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D2E6E97_114D_E654_4194_4D95380E6F14"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 130.6,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 0
 },
 "id": "camera_0D694E6A_114D_E6FC_41A9_C2EC14E5FEAB"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -133.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D0A5E88_114D_E63B_41A0_A1FE935ECB3E"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 10.79,
   "yaw": -100.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF"
  },
  {
   "backwardYaw": -47.61,
   "yaw": 71.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CA2346_06C9_AD39_4190_C2542FB00654"
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
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_t.jpg"
  }
 ],
 "partial": false,
 "label": "Master Bedroom 1",
 "id": "panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD",
 "thumbnailUrl": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_t.jpg",
 "overlays": [
  "this.overlay_26200C98_06C9_9B49_418F_AB2269EF38C6",
  "this.overlay_273C584F_06C9_BBC7_4183_2F135A36CAD4"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 104.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C2A3F05_114D_E635_41AF_261542A4893A"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -108.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0DC8FEA7_114D_E675_419F_2BB28FF70973"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -20.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D83FEC6_114D_E637_4198_9133CD33DFC9"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -162.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D933EC6_114D_E637_41A2_1A31EEB2A91E"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 111.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0DA11EC6_114D_E637_417B_DFC6AFE9D16D"
},
{
 "items": [
  {
   "media": "this.panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 0, 1)",
   "camera": "this.panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_1427B418_06FB_AB4A_4184_55EE183B1A74",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 1, 2)",
   "camera": "this.panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CA2346_06C9_AD39_4190_C2542FB00654",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 2, 3)",
   "camera": "this.panorama_14CA2346_06C9_AD39_4190_C2542FB00654_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CFE800_06C9_BB39_418E_7A9053E21700",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 3, 4)",
   "camera": "this.panorama_14CFE800_06C9_BB39_418E_7A9053E21700_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14C9D638_06C8_9749_4195_A6D27474D8BA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 4, 5)",
   "camera": "this.panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14DD698C_06D7_9D49_4186_D672701EEC61",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 5, 6)",
   "camera": "this.panorama_14DD698C_06D7_9D49_4186_D672701EEC61_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CC863B_06C8_774F_4168_3588241E34B2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 6, 7)",
   "camera": "this.panorama_14CC863B_06C8_774F_4168_3588241E34B2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 7, 8)",
   "camera": "this.panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 8, 9)",
   "camera": "this.panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 9, 10)",
   "camera": "this.panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CA1196_06C8_ED59_4162_348214BD62D8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 10, 11)",
   "camera": "this.panorama_14CA1196_06C8_ED59_4162_348214BD62D8_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 11, 12)",
   "camera": "this.panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 12, 13)",
   "camera": "this.panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 13, 14)",
   "camera": "this.panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 14, 15)",
   "camera": "this.panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 15, 16)",
   "camera": "this.panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 16, 17)",
   "camera": "this.panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 17, 18)",
   "camera": "this.panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 18, 19)",
   "camera": "this.panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist, 19, 0)",
   "camera": "this.panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 3.23,
  "class": "PanoramaCameraPosition",
  "pitch": -28.46
 },
 "id": "panorama_14CC863B_06C8_774F_4168_3588241E34B2_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 74.06,
  "class": "PanoramaCameraPosition",
  "pitch": -55.96
 },
 "id": "panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA"
  },
  {
   "backwardYaw": -100.13,
   "yaw": -5.65,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1427B418_06FB_AB4A_4184_55EE183B1A74"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "label": "Entrance ",
 "id": "panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9",
 "thumbnailUrl": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_t.jpg"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_2E21A281_06BF_AF3B_4194_E546CF71680B",
  "this.overlay_212B6D69_06B8_95CA_418A_DB584A992C75"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323000,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": -177.61,
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "pitch": 0
 },
 "id": "camera_0C5E9EE5_114D_E7F4_41B1_162C603681F7"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "yaw": 79.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_084C0F82_114D_E62F_41AB_3B09BEA4F310"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 18.46,
   "yaw": -158.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14CA1196_06C8_ED59_4162_348214BD62D8"
  },
  {
   "backwardYaw": 159.39,
   "yaw": 84.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14C9D638_06C8_9749_4195_A6D27474D8BA"
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
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_t.jpg"
  }
 ],
 "partial": false,
 "label": "Master Bedroom 3",
 "id": "panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA",
 "thumbnailUrl": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_t.jpg",
 "overlays": [
  "this.overlay_1BA9B275_06D8_6FDB_417C_7F65C67B944E",
  "this.overlay_1B6581EE_06D8_ACC9_4194_AA11601E86AF"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "minHeight": 50,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "minWidth": 100,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "transitionMode": "blending",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "displayTooltipInTouchScreens": true,
 "class": "ViewerArea",
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
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
 "vrPointerColor": "#FFFFFF",
 "paddingTop": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427"
 ],
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "right": "0%",
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "class": "Container",
 "height": "14.774%",
 "shadow": false,
 "bottom": "0%",
 "gap": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "paddingTop": 0,
 "data": {
  "name": "--- MENU"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "layout": "absolute",
 "backgroundOpacity": 0,
 "width": 115.05,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "right": "0%",
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "class": "Container",
 "height": 641,
 "scrollBarMargin": 2,
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "children": [
  "this.Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
  "this.Container_33F2D10A_17CC_3D05_4199_54BCA881FB17",
  "this.Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
  "this.Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B"
 ],
 "id": "Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
 "left": 30,
 "layout": "absolute",
 "backgroundOpacity": 0,
 "width": 573,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": 25,
 "contentOpaque": false,
 "borderSize": 0,
 "class": "Container",
 "height": 116,
 "scrollBarMargin": 2,
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "paddingTop": 0,
 "data": {
  "name": "--STICKER"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "children": [
  "this.Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
  "this.Container_386C28AA_17CC_0B05_41B7_3334E854CA29"
 ],
 "id": "Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--INFO photoalbum"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance"
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "children": [
  "this.Container_3811F7E8_17DC_0505_417B_3406AEA143C9"
 ],
 "id": "Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance"
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "children": [
  "this.Container_2792F64D_17CC_071F_415E_8686768A06D3"
 ],
 "id": "Container_2792A64E_17CC_071D_41B0_BEA23997C067",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--LOCATION"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance"
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "children": [
  "this.Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E"
 ],
 "id": "Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance"
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "children": [
  "this.Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076"
 ],
 "id": "Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance"
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "children": [
  "this.Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
  "this.Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27"
 ],
 "id": "Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 0.6,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--CONTACT"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance"
},
{
 "verticalAlign": "middle",
 "cursor": "hand",
 "fontFamily": "Times New Roman",
 "paddingRight": 0,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "id": "Button_2DA4ABE2_0749_9CF9_418B_A31A970D6044",
 "left": "0%",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "width": 175.75,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowOpacity": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "iconWidth": 0,
 "propagateClick": false,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "iconHeight": 0,
 "top": "16.87%",
 "iconBeforeLabel": true,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "mode": "push",
 "class": "Button",
 "height": 36,
 "shadow": true,
 "rollOverShadow": false,
 "label": "Living Room",
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "fontSize": "18px",
 "backgroundColorDirection": "vertical",
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "fontStyle": "normal",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "backgroundColor": [
  "#FFCC00"
 ],
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "visible": false,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "paddingLeft": 0,
 "shadowBlurRadius": 15,
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "verticalAlign": "middle",
 "fontFamily": "Times New Roman",
 "paddingRight": 0,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "id": "Button_28AA0A80_0758_BF39_4196_8C69D8E05DF4",
 "left": "1.86%",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "width": 147,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "minHeight": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "fontColor": "#FFFFFF",
 "iconWidth": 0,
 "propagateClick": false,
 "borderColor": "#000000",
 "minWidth": 1,
 "iconHeight": 0,
 "top": "19.96%",
 "iconBeforeLabel": true,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "mode": "push",
 "class": "Button",
 "height": 40,
 "shadow": false,
 "rollOverShadow": false,
 "label": "Master Bedroom 1",
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "fontSize": "18px",
 "backgroundColorDirection": "vertical",
 "click": "this.mainPlayList.set('selectedIndex', 2)",
 "fontStyle": "normal",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "visible": false,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "paddingLeft": 0,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "verticalAlign": "middle",
 "fontFamily": "Times New Roman",
 "paddingRight": 0,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "id": "Button_28D528A8_0758_7B49_4173_9BD2261EE635",
 "left": "0.96%",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "width": 173,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "minHeight": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "fontColor": "#FFFFFF",
 "iconWidth": 0,
 "propagateClick": false,
 "borderColor": "#000000",
 "minWidth": 1,
 "iconHeight": 0,
 "top": "28.56%",
 "iconBeforeLabel": true,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "mode": "push",
 "class": "Button",
 "height": 40,
 "shadow": false,
 "rollOverShadow": false,
 "label": "Master Bedroom 3",
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "fontSize": "18px",
 "backgroundColorDirection": "vertical",
 "click": "this.mainPlayList.set('selectedIndex', 4)",
 "fontStyle": "normal",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "visible": false,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "paddingLeft": 0,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "verticalAlign": "middle",
 "fontFamily": "Times New Roman",
 "paddingRight": 0,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "id": "Button_33A89FEE_0749_94C9_417D_0F5066009709",
 "left": "1.33%",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "width": 163,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "minHeight": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "fontColor": "#FFFFFF",
 "iconWidth": 0,
 "propagateClick": false,
 "borderColor": "#000000",
 "minWidth": 1,
 "iconHeight": 0,
 "top": "24.48%",
 "iconBeforeLabel": true,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "mode": "push",
 "class": "Button",
 "height": 40,
 "shadow": false,
 "rollOverShadow": false,
 "label": "Master Bedroom 2",
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "fontSize": "18px",
 "backgroundColorDirection": "vertical",
 "click": "this.mainPlayList.set('selectedIndex', 3)",
 "fontStyle": "normal",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "visible": false,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "paddingLeft": 0,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "verticalAlign": "middle",
 "fontFamily": "Sans Serif Collection",
 "paddingRight": 0,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "id": "Button_35D34F0B_0748_F54F_4186_C823BE1E2BA8",
 "left": "2.05%",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "width": 132,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "minHeight": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "fontColor": "#FFFFFF",
 "iconWidth": 0,
 "propagateClick": false,
 "borderColor": "#000000",
 "minWidth": 1,
 "iconHeight": 0,
 "top": "32.19%",
 "iconBeforeLabel": true,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "mode": "push",
 "class": "Button",
 "height": 40,
 "shadow": false,
 "rollOverShadow": false,
 "label": "Passage Area",
 "pressedBackgroundColor": [
  "#BBD149"
 ],
 "fontSize": "18px",
 "backgroundColorDirection": "vertical",
 "click": "this.mainPlayList.set('selectedIndex', 8)",
 "fontStyle": "normal",
 "rollOverBackgroundColor": [
  "#BBD149"
 ],
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "visible": false,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "paddingLeft": 0,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "paddingLeft": 20,
 "id": "ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514",
 "left": "0%",
 "width": 170,
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#FFFFFF",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "itemPaddingRight": 3,
 "borderRadius": 5,
 "itemThumbnailOpacity": 1,
 "itemLabelFontFamily": "Arial",
 "itemThumbnailShadowOpacity": 0.54,
 "itemBorderRadius": 0,
 "minWidth": 20,
 "itemOpacity": 1,
 "height": "79.494%",
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelPosition": "bottom",
 "itemBackgroundOpacity": 0,
 "shadow": false,
 "itemHorizontalAlign": "center",
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 50,
 "paddingBottom": 10,
 "itemThumbnailShadowSpread": 1,
 "verticalAlign": "top",
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "rollOverItemBackgroundOpacity": 0,
 "paddingRight": 20,
 "rollOverItemLabelFontWeight": "normal",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "layout": "vertical",
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "propagateClick": false,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailShadowVerticalLength": 3,
 "scrollBarMargin": 2,
 "playList": "this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist",
 "borderSize": 0,
 "itemLabelFontSize": 14,
 "bottom": "5.4%",
 "class": "ThumbnailList",
 "itemLabelFontColor": "#FFFFFF",
 "itemVerticalAlign": "middle",
 "itemThumbnailShadowBlurRadius": 8,
 "itemThumbnailHeight": 75,
 "itemThumbnailScaleMode": "fit_outside",
 "gap": 10,
 "itemBackgroundColorDirection": "vertical",
 "itemLabelGap": 9,
 "itemThumbnailShadow": true,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemThumbnailShadowColor": "#000000",
 "scrollBarWidth": 10,
 "itemThumbnailWidth": 75
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "toggle",
 "class": "IconButton",
 "height": 58,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "maxWidth": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingLeft": 0,
 "maxHeight": 58,
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "toggle",
 "class": "IconButton",
 "height": 58,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "maxWidth": 58,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingLeft": 0,
 "maxHeight": 58,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232, this.camera_0D394EA7_114D_E675_41A3_D18CD3D01F59); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0_HS_0_0.png",
      "width": 1558,
      "class": "ImageResourceLevel",
      "height": 444
     }
    ]
   },
   "pitch": 1.33,
   "hfov": 38.67,
   "yaw": 125.48,
   "distance": 50
  }
 ],
 "id": "overlay_24336BC6_06C8_BD39_4192_0EB40A6CEA81",
 "data": {
  "label": "Passge Area"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0_HS_0_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 125.48,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.67,
   "pitch": 1.33
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD, this.camera_0DC8FEA7_114D_E675_419F_2BB28FF70973); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0_HS_1_0.png",
      "width": 1558,
      "class": "ImageResourceLevel",
      "height": 444
     }
    ]
   },
   "pitch": -6.21,
   "hfov": 38.45,
   "yaw": -47.61,
   "distance": 50
  }
 ],
 "id": "overlay_258F0C80_06B8_9B39_417C_411BE797AAD0",
 "data": {
  "label": "Balcony View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CA2346_06C9_AD39_4190_C2542FB00654_0_HS_1_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -47.61,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.45,
   "pitch": -6.21
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_1_HS_0_0.png",
      "width": 1008,
      "class": "ImageResourceLevel",
      "height": 463
     }
    ]
   },
   "pitch": -4.46,
   "hfov": 25.05,
   "yaw": -17.46,
   "distance": 50
  }
 ],
 "id": "overlay_1C4CF313_06C9_ED5F_4197_15028254555C",
 "data": {
  "label": "Centre View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CC5EFD_06C8_94CA_4199_F0BC320A9018_1_HS_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -17.46,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25.05,
   "pitch": -4.46
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CFE800_06C9_BB39_418E_7A9053E21700, this.camera_0C0B6EF5_114D_E7D5_4199_209CC77EAEEF); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_1_HS_0_0.png",
      "width": 1554,
      "class": "ImageResourceLevel",
      "height": 443
     }
    ]
   },
   "pitch": -3.2,
   "hfov": 38.62,
   "yaw": 22.73,
   "distance": 50
  }
 ],
 "id": "overlay_1B0C3FB0_06D9_9559_417A_ADF41A09FB1E",
 "data": {
  "label": "Centre View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_1_HS_0_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": 22.73,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.62,
   "pitch": -3.2
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A, this.camera_0C1ADF05_114D_E635_4190_776B5FCE2FCB); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_1_HS_1_0.png",
      "width": 1554,
      "class": "ImageResourceLevel",
      "height": 443
     }
    ]
   },
   "pitch": -6.97,
   "hfov": 38.39,
   "yaw": -156.39,
   "distance": 50
  }
 ],
 "id": "overlay_18D69D69_06D8_B5CB_4193_1DF91467A952",
 "data": {
  "label": "Balcony"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C_1_HS_1_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": -156.39,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.39,
   "pitch": -6.97
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD, this.camera_084C0F82_114D_E62F_41AB_3B09BEA4F310); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_1_HS_0_0.png",
      "width": 1522,
      "class": "ImageResourceLevel",
      "height": 362
     }
    ]
   },
   "pitch": -7.96,
   "hfov": 37.54,
   "yaw": 10.79,
   "distance": 50
  }
 ],
 "id": "overlay_1806062F_06D9_9747_4192_5FB430E63030",
 "data": {
  "label": "Master Bedroom "
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_1_HS_0_0_map.gif",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 10.79,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 37.54,
   "pitch": -7.96
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A, this.camera_08514F82_114D_E62F_4131_4C976C61ACE8); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2F67FD8F_06CB_9547_4184_F019630B0181",
   "hfov": 12.73,
   "pitch": -9.73,
   "yaw": -75.81,
   "distance": 100
  }
 ],
 "id": "overlay_24358B99_06D7_BD4B_416C_0675F9773BDE",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -75.81,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.73,
   "pitch": -9.73
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950, this.camera_0DF5AEB6_114D_E654_418A_28419703F85E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_1_HS_0_0.png",
      "width": 1009,
      "class": "ImageResourceLevel",
      "height": 464
     }
    ]
   },
   "pitch": -6.47,
   "hfov": 24.96,
   "yaw": 91.07,
   "distance": 50
  }
 ],
 "id": "overlay_1F82ED08_06CB_9549_4174_7C7F5A3163AB",
 "data": {
  "label": "Dining View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_1_HS_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 91.07,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 24.96,
   "pitch": -6.47
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232, this.camera_0D83FEC6_114D_E637_4198_9133CD33DFC9); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_1_HS_1_0.png",
      "width": 1009,
      "class": "ImageResourceLevel",
      "height": 464
     }
    ]
   },
   "pitch": -5.72,
   "hfov": 25,
   "yaw": -92.32,
   "distance": 50
  }
 ],
 "id": "overlay_1FDCEEC8_06C8_B4C9_4176_65DC9E04CDD8",
 "data": {
  "label": "Passage Area"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CC863B_06C8_774F_4168_3588241E34B2_1_HS_1_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -92.32,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25,
   "pitch": -5.72
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950, this.camera_0D7DDE78_114D_E6DB_41B1_1B7AAF25D9AF); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_1_HS_0_0.png",
      "width": 1009,
      "class": "ImageResourceLevel",
      "height": 464
     }
    ]
   },
   "pitch": -4.71,
   "hfov": 25.04,
   "yaw": 48.11,
   "distance": 50
  }
 ],
 "id": "overlay_1EBB155C_06C9_95C9_4157_ADA36A45563C",
 "data": {
  "label": "Dining View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_1_HS_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 48.11,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25.04,
   "pitch": -4.71
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A, this.camera_0D0A5E88_114D_E63B_41A0_A1FE935ECB3E); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_1_HS_1_0.png",
      "width": 1009,
      "class": "ImageResourceLevel",
      "height": 464
     }
    ]
   },
   "pitch": -0.44,
   "hfov": 25.12,
   "yaw": 123.73,
   "distance": 50
  }
 ],
 "id": "overlay_1E08809D_06C8_AB4A_4181_33B5333B69BC",
 "data": {
  "label": "Wash Area"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14DD698C_06D7_9D49_4186_D672701EEC61_1_HS_1_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 123.73,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25.12,
   "pitch": -0.44
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA, this.camera_0D694E6A_114D_E6FC_41A9_C2EC14E5FEAB); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_1_HS_0_0.png",
      "width": 1008,
      "class": "ImageResourceLevel",
      "height": 463
     }
    ]
   },
   "pitch": -4.71,
   "hfov": 25.04,
   "yaw": 48.11,
   "distance": 50
  }
 ],
 "id": "overlay_130D5F6B_06FF_95CF_4175_3E8F62850FA0",
 "data": {
  "label": "Balcony View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_1_HS_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 48.11,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25.04,
   "pitch": -4.71
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1427B418_06FB_AB4A_4184_55EE183B1A74, this.camera_0D745E6F_114D_E6F4_41A2_7925797F3E5C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_1_HS_1_0.png",
      "width": 1008,
      "class": "ImageResourceLevel",
      "height": 463
     }
    ]
   },
   "pitch": -6.47,
   "hfov": 24.96,
   "yaw": 2.39,
   "distance": 50
  }
 ],
 "id": "overlay_105AE7F5_06F9_F4DB_4191_FEED82F73C1F",
 "data": {
  "label": "Centre View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_1_HS_1_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 2.39,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 24.96,
   "pitch": -6.47
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14DD698C_06D7_9D49_4186_D672701EEC61, this.camera_0D562E49_114D_E63D_41A9_BB5F0A5D766E); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_1_HS_2_0.png",
      "width": 1008,
      "class": "ImageResourceLevel",
      "height": 463
     }
    ]
   },
   "pitch": -4.71,
   "hfov": 25.04,
   "yaw": 104.13,
   "distance": 50
  }
 ],
 "id": "overlay_10695C5F_06F9_9BC6_4186_D073F14AAEBE",
 "data": {
  "label": "Kitchen"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_1_HS_2_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 104.13,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25.04,
   "pitch": -4.71
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CC863B_06C8_774F_4168_3588241E34B2, this.camera_0D605E58_114D_E6DC_41A9_16A36141FE45); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_1_HS_3_0.png",
      "width": 1008,
      "class": "ImageResourceLevel",
      "height": 463
     }
    ]
   },
   "pitch": -8.98,
   "hfov": 24.81,
   "yaw": -161.91,
   "distance": 50
  }
 ],
 "id": "overlay_103280F8_06F8_6CC9_4176_041905041EA0",
 "data": {
  "label": "Pooja Area"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950_1_HS_3_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -161.91,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 24.81,
   "pitch": -8.98
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14DD698C_06D7_9D49_4186_D672701EEC61, this.camera_08465F82_114D_E62F_41AD_23BC6F14EF59); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0_HS_0_0.png",
      "width": 1552,
      "class": "ImageResourceLevel",
      "height": 442
     }
    ]
   },
   "pitch": 0.84,
   "hfov": 38.65,
   "yaw": 46.08,
   "distance": 50
  }
 ],
 "id": "overlay_2E4AF0F2_06B8_ACD9_418E_FFC5EDBFE33A",
 "data": {
  "label": "Kitchen"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CB9CB8_06C9_9B49_4186_C4FCE73F313A_0_HS_0_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 46.08,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.65,
   "pitch": 0.84
  }
 ]
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "toggle",
 "class": "IconButton",
 "height": 58,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "maxWidth": 58,
 "data": {
  "name": "IconButton HS "
 },
 "paddingLeft": 0,
 "maxHeight": 58,
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "backgroundOpacity": 0,
 "width": 49,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "height": 37,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "paddingBottom": 0,
 "maxWidth": 49,
 "data": {
  "name": "IconButton VR"
 },
 "paddingLeft": 0,
 "maxHeight": 37,
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "height": 58,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingBottom": 0,
 "visible": false,
 "maxWidth": 58,
 "data": {
  "name": "IconButton VR"
 },
 "paddingLeft": 0,
 "maxHeight": 58,
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "toggle",
 "class": "IconButton",
 "height": 58,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "maxWidth": 58,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingLeft": 0,
 "maxHeight": 58,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA, this.camera_08403F72_114D_E6EF_419C_15CD6AE88537); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_1_HS_0_0.png",
      "width": 1555,
      "class": "ImageResourceLevel",
      "height": 444
     }
    ]
   },
   "pitch": 2.83,
   "hfov": 38.63,
   "yaw": 18.46,
   "distance": 50
  }
 ],
 "id": "overlay_1B37E441_06D8_6B3B_416A_A3319E4B814A",
 "data": {
  "label": "Master Bedroom 3"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CA1196_06C8_ED59_4162_348214BD62D8_1_HS_0_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 18.46,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.63,
   "pitch": 2.83
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA, this.camera_09BCBF72_114D_E6EF_419B_6B40C6C6360A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_1_HS_0_0.png",
      "width": 1554,
      "class": "ImageResourceLevel",
      "height": 443
     }
    ]
   },
   "pitch": -9.48,
   "hfov": 38.15,
   "yaw": 159.39,
   "distance": 50
  }
 ],
 "id": "overlay_1A517D1E_06D8_B549_4194_C329AC0598F9",
 "data": {
  "label": "Side View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C9D638_06C8_9749_4195_A6D27474D8BA_1_HS_0_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": 159.39,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.15,
   "pitch": -9.48
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA, this.camera_0C7C8EF5_114D_E7D5_41AD_BC240E056F50); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0_HS_0_0.png",
      "width": 1552,
      "class": "ImageResourceLevel",
      "height": 443
     }
    ]
   },
   "pitch": -4.45,
   "hfov": 38.56,
   "yaw": -16.21,
   "distance": 50
  }
 ],
 "id": "overlay_22555618_06BB_9749_417C_C170499FF91A",
 "data": {
  "label": "Balcony View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0_HS_0_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": -16.21,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.56,
   "pitch": -4.45
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0_HS_1_0.png",
      "width": 1551,
      "class": "ImageResourceLevel",
      "height": 442
     }
    ]
   },
   "pitch": -5.95,
   "hfov": 38.44,
   "yaw": 51.36,
   "distance": 50
  }
 ],
 "id": "overlay_222E9A04_06B8_BF39_4191_3050679DE71C",
 "data": {
  "label": "Kitchen"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0_HS_1_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 51.36,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.44,
   "pitch": -5.95
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950, this.camera_0C5E9EE5_114D_E7F4_41B1_162C603681F7); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0_HS_2_0.png",
      "width": 1552,
      "class": "ImageResourceLevel",
      "height": 443
     }
    ]
   },
   "pitch": -5.96,
   "hfov": 38.47,
   "yaw": 91.31,
   "distance": 50
  }
 ],
 "id": "overlay_23E92E12_06B8_9759_4185_17B1B0134193",
 "data": {
  "label": "Dining View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0_HS_2_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": 91.31,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.47,
   "pitch": -5.96
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9, this.camera_0C6D6EE5_114D_E7F4_41A7_28B9F90BD6E6); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0_HS_3_0.png",
      "width": 1551,
      "class": "ImageResourceLevel",
      "height": 442
     }
    ]
   },
   "pitch": -7.2,
   "hfov": 38.35,
   "yaw": -100.13,
   "distance": 50
  }
 ],
 "id": "overlay_200E54A2_06B8_6B79_4183_9864B8898065",
 "data": {
  "label": "Entrance View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1427B418_06FB_AB4A_4184_55EE183B1A74_0_HS_3_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -100.13,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.35,
   "pitch": -7.2
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CFE800_06C9_BB39_418E_7A9053E21700, this.camera_0D933EC6_114D_E637_41A2_1A31EEB2A91E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0_HS_0_0.png",
      "width": 1557,
      "class": "ImageResourceLevel",
      "height": 445
     }
    ]
   },
   "pitch": -3.22,
   "hfov": 38.65,
   "yaw": -20.46,
   "distance": 50
  }
 ],
 "id": "overlay_2E419335_0748_6D5B_4178_2831679A064D",
 "data": {
  "label": "Master Bedroom "
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D_0_HS_0_0_map.gif",
      "width": 55,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -20.46,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.65,
   "pitch": -3.22
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CC863B_06C8_774F_4168_3588241E34B2, this.camera_0DB09ED6_114D_E7D7_417E_6BC129F89FA8); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_1_HS_0_0.png",
      "width": 1008,
      "class": "ImageResourceLevel",
      "height": 463
     }
    ]
   },
   "pitch": -5.95,
   "hfov": 24.96,
   "yaw": 159.64,
   "distance": 50
  }
 ],
 "id": "overlay_1C5C1CA6_06C8_9B79_4170_8A98BEE639D2",
 "data": {
  "label": "Pooja Area"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_1_HS_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 159.64,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 24.96,
   "pitch": -5.95
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_1_HS_1_0.png",
      "width": 1555,
      "class": "ImageResourceLevel",
      "height": 445
     }
    ]
   },
   "pitch": -3.22,
   "hfov": 38.65,
   "yaw": -20.46,
   "distance": 50
  }
 ],
 "id": "overlay_1ADD8AED_06CB_BCCB_4177_8ACF90F84508",
 "data": {
  "label": "Master Bedroom 3"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_1_HS_1_0_map.gif",
      "width": 55,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -20.46,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.65,
   "pitch": -3.22
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CFE800_06C9_BB39_418E_7A9053E21700, this.camera_0DBF5ED6_114D_E7D7_41B0_7AF7EDE174A3); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_1_HS_2_0.png",
      "width": 1578,
      "class": "ImageResourceLevel",
      "height": 438
     }
    ]
   },
   "pitch": -4.64,
   "hfov": 39.17,
   "yaw": -73.93,
   "distance": 50
  }
 ],
 "id": "overlay_1B803DF6_06C8_94D9_418D_DCFC41C4DC8F",
 "data": {
  "label": "Master Bedroom 2"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_1_HS_2_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -73.93,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 39.17,
   "pitch": -4.64
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CA2346_06C9_AD39_4190_C2542FB00654, this.camera_0C4E9EE5_114D_E7F4_4186_4E73EEC3ABCD); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_1_HS_3_0.png",
      "width": 1444,
      "class": "ImageResourceLevel",
      "height": 445
     }
    ]
   },
   "pitch": -5.98,
   "hfov": 35.75,
   "yaw": -145.19,
   "distance": 50
  }
 ],
 "id": "overlay_1B281097_06C8_EB47_4181_C156C01CBEF2",
 "data": {
  "label": "Master Bedroom 1 "
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_1_HS_3_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -145.19,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 35.75,
   "pitch": -5.98
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2, this.camera_0DA11EC6_114D_E637_417B_DFC6AFE9D16D); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_1_HS_4_0.png",
      "width": 1553,
      "class": "ImageResourceLevel",
      "height": 443
     }
    ]
   },
   "pitch": -2.44,
   "hfov": 38.64,
   "yaw": 40.57,
   "distance": 50
  }
 ],
 "id": "overlay_1D7A7D03_06C8_753F_417D_E859CC689EE2",
 "data": {
  "label": "Washroom"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232_1_HS_4_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": 40.57,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.64,
   "pitch": -2.44
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15EBDD7F_06D7_B5C7_4198_10ADE085A950, this.camera_0CC81F14_114D_E654_41A0_2DB34B24D315); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_1_HS_0_0.png",
      "width": 1006,
      "class": "ImageResourceLevel",
      "height": 461
     }
    ]
   },
   "pitch": -6.68,
   "hfov": 24.88,
   "yaw": -49.4,
   "distance": 50
  }
 ],
 "id": "overlay_1F58BD24_06C8_757A_4182_E6F39CFEB38B",
 "data": {
  "label": "Dining View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_1_HS_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -49.4,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 24.88,
   "pitch": -6.68
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1427B418_06FB_AB4A_4184_55EE183B1A74, this.camera_0CD6DF14_114D_E654_41A9_D955D8A7591C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_1_HS_1_0.png",
      "width": 1008,
      "class": "ImageResourceLevel",
      "height": 463
     }
    ]
   },
   "pitch": -5.45,
   "hfov": 24.98,
   "yaw": -0.39,
   "distance": 50
  }
 ],
 "id": "overlay_1C78FBD2_06C8_7CD9_418C_C0A3FD49C015",
 "data": {
  "label": "Centre View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_1_HS_1_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -0.39,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 24.98,
   "pitch": -5.45
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_1_HS_2_0.png",
      "width": 1008,
      "class": "ImageResourceLevel",
      "height": 463
     }
    ]
   },
   "pitch": -8.47,
   "hfov": 24.82,
   "yaw": -162.68,
   "distance": 50
  }
 ],
 "id": "overlay_1AB6B0E0_06CF_ACF9_4192_DDD1D0357BAB",
 "data": {
  "label": "Balcony"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14C8127C_06C8_6FC9_4193_9D40B48868AA_1_HS_2_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -162.68,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 24.82,
   "pitch": -8.47
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232, this.camera_085C4F91_114D_E62C_4163_35CF298A6984); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0_HS_0_0.png",
      "width": 1555,
      "class": "ImageResourceLevel",
      "height": 444
     }
    ]
   },
   "pitch": -3.7,
   "hfov": 38.59,
   "yaw": -68.97,
   "distance": 50
  }
 ],
 "id": "overlay_2C8C806C_06B8_6BC9_415F_A184C4648808",
 "data": {
  "label": "Passage Area"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CCF1CD_06C8_6CCB_4195_BD1FC38526F2_0_HS_0_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -68.97,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.59,
   "pitch": -3.7
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14F5AB30_06C8_BD59_419A_DFDDCAB76232, this.camera_0D2E6E97_114D_E654_4194_4D95380E6F14); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0_HS_0_0.png",
      "width": 1554,
      "class": "ImageResourceLevel",
      "height": 443
     }
    ]
   },
   "pitch": -4.2,
   "hfov": 38.57,
   "yaw": 128.24,
   "distance": 50
  }
 ],
 "id": "overlay_257D8CA6_06B9_9B46_4196_A13F066FBAAA",
 "data": {
  "label": "Passage Area"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0_HS_0_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": 128.24,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.57,
   "pitch": -4.2
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14F9CB1F_06C8_9D46_418C_D131BB096E1D, this.camera_0D21BE97_114D_E654_41A6_2D09462E97B9); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0_HS_1_0.png",
      "width": 1554,
      "class": "ImageResourceLevel",
      "height": 443
     }
    ]
   },
   "pitch": -2.19,
   "hfov": 38.65,
   "yaw": 17.45,
   "distance": 50
  }
 ],
 "id": "overlay_224B46E5_06B8_74FB_4173_D3D72C87A3D1",
 "data": {
  "label": "Washroom"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0_HS_1_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": 17.45,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.65,
   "pitch": -2.19
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C, this.camera_0D16CE88_114D_E63B_41B1_2E38EFAC009A); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0_HS_2_0.png",
      "width": 1552,
      "class": "ImageResourceLevel",
      "height": 441
     }
    ]
   },
   "pitch": -3.93,
   "hfov": 38.53,
   "yaw": -40.6,
   "distance": 50
  }
 ],
 "id": "overlay_2041AA93_06B8_BF5F_417B_C984F193081F",
 "data": {
  "label": "Balocny View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CFE800_06C9_BB39_418E_7A9053E21700_0_HS_2_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -40.6,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.53,
   "pitch": -3.93
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CDC8AC_06C8_9B4A_4198_9F96E106727C, this.camera_0C38FF05_114D_E635_418D_4EFDC14BBE46); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_1_HS_0_0.png",
      "width": 1554,
      "class": "ImageResourceLevel",
      "height": 444
     }
    ]
   },
   "pitch": -3.22,
   "hfov": 38.65,
   "yaw": -20.46,
   "distance": 50
  }
 ],
 "id": "overlay_18D392A5_06DB_EF7A_416C_68691CBB20AA",
 "data": {
  "label": "Master Bedroom "
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_1_HS_0_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -20.46,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.65,
   "pitch": -3.22
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF, this.camera_0C2A3F05_114D_E635_41AF_261542A4893A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2F64BD8F_06CB_9547_4188_187AE35B78BF",
   "hfov": 12.65,
   "pitch": -11.74,
   "yaw": 73.16,
   "distance": 100
  }
 ],
 "id": "overlay_180ACC10_06D8_BB59_4183_D4A98193CB17",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 73.16,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.65,
   "pitch": -11.74
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF, this.camera_0CE64F24_114D_E66B_417E_5D9E99F36594); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_1_HS_0_0.png",
      "width": 1555,
      "class": "ImageResourceLevel",
      "height": 443
     }
    ]
   },
   "pitch": -2.44,
   "hfov": 38.64,
   "yaw": -100.37,
   "distance": 50
  }
 ],
 "id": "overlay_26200C98_06C9_9B49_418F_AB2269EF38C6",
 "data": {
  "label": "Balcony"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_1_HS_0_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": -100.37,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.64,
   "pitch": -2.44
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CA2346_06C9_AD39_4190_C2542FB00654, this.camera_09B8FF62_114D_E6EC_418F_70A875B0DB98); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0_HS_1_0.png",
      "width": 1555,
      "class": "ImageResourceLevel",
      "height": 443
     }
    ]
   },
   "pitch": -4.2,
   "hfov": 38.57,
   "yaw": 71.47,
   "distance": 50
  }
 ],
 "id": "overlay_273C584F_06C9_BBC7_4183_2F135A36CAD4",
 "data": {
  "label": "Centre View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CD6656_06C8_77C6_4199_571F18D1EFAD_0_HS_1_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": 71.47,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.57,
   "pitch": -4.2
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1427B418_06FB_AB4A_4184_55EE183B1A74, this.camera_0857FF91_114D_E62C_41AA_195F302ADCF4); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0_HS_0_0.png",
      "width": 1555,
      "class": "ImageResourceLevel",
      "height": 444
     }
    ]
   },
   "pitch": -3.96,
   "hfov": 38.61,
   "yaw": -5.65,
   "distance": 50
  }
 ],
 "id": "overlay_2E21A281_06BF_AF3B_4194_E546CF71680B",
 "data": {
  "label": "Centre View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0_HS_0_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -5.65,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.61,
   "pitch": -3.96
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0_HS_1_0.png",
      "width": 1555,
      "class": "ImageResourceLevel",
      "height": 444
     }
    ]
   },
   "pitch": -2.71,
   "hfov": 38.66,
   "yaw": -76.24,
   "distance": 50
  }
 ],
 "id": "overlay_212B6D69_06B8_95CA_418A_DB584A992C75",
 "data": {
  "label": "Balcony View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14F8F175_06F8_6DDB_4195_3893BCFFD7F9_0_HS_1_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -76.24,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.66,
   "pitch": -2.71
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14C9D638_06C8_9749_4195_A6D27474D8BA, this.camera_0DE67EB6_114D_E654_41AB_FF8D9B0D7586); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_1_HS_0_0.png",
      "width": 1555,
      "class": "ImageResourceLevel",
      "height": 443
     }
    ]
   },
   "pitch": -5.46,
   "hfov": 38.5,
   "yaw": 84.03,
   "distance": 50
  }
 ],
 "id": "overlay_1BA9B275_06D8_6FDB_417C_7F65C67B944E",
 "data": {
  "label": "Centre View"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_1_HS_0_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": 84.03,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.5,
   "pitch": -5.46
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CA1196_06C8_ED59_4162_348214BD62D8, this.camera_0DD60EA7_114D_E675_41B0_35306EA65317); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_1_HS_1_0.png",
      "width": 1555,
      "class": "ImageResourceLevel",
      "height": 443
     }
    ]
   },
   "pitch": -0.94,
   "hfov": 38.67,
   "yaw": -158.4,
   "distance": 50
  }
 ],
 "id": "overlay_1B6581EE_06D8_ACC9_4194_AA11601E86AF",
 "data": {
  "label": "Washroom"
 },
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_14CB4D55_06C8_F5DB_418A_4A75E36E90BA_1_HS_1_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": -158.4,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 38.67,
   "pitch": -0.94
  }
 ]
},
{
 "verticalAlign": "middle",
 "paddingRight": 0,
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "right": "0%",
 "minHeight": 1,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": 66,
 "borderSize": 0,
 "class": "Image",
 "height": 1,
 "shadow": false,
 "paddingBottom": 0,
 "maxWidth": 3000,
 "data": {
  "name": "white line"
 },
 "paddingLeft": 0,
 "maxHeight": 2,
 "paddingTop": 0,
 "scaleMode": "fit_outside"
},
{
 "verticalAlign": "middle",
 "paddingRight": 0,
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
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "width": 1199,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "class": "Container",
 "height": 62,
 "shadow": false,
 "bottom": "0%",
 "gap": 3,
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "-button set container"
 },
 "paddingLeft": 30,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "middle",
 "paddingRight": 0,
 "children": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "width": 110,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "right": "0%",
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "class": "Container",
 "height": 110,
 "scrollBarMargin": 2,
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
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
 "layout": "vertical",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "width": "91.304%",
 "minHeight": 1,
 "right": "0%",
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "class": "Container",
 "height": "85.959%",
 "shadow": false,
 "bottom": "0%",
 "gap": 3,
 "paddingBottom": 0,
 "overflow": "scroll",
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "id": "Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
 "left": 1,
 "layout": "absolute",
 "backgroundOpacity": 1,
 "width": 250,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColorRatios": [
  0.01
 ],
 "height": 49,
 "class": "Container",
 "scrollBarMargin": 2,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "backgroundColor": [
  "#FFCC33"
 ],
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "red block"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "id": "Container_33F2D10A_17CC_3D05_4199_54BCA881FB17",
 "left": "0%",
 "layout": "absolute",
 "backgroundOpacity": 1,
 "width": 251,
 "horizontalAlign": "left",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadowOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 47,
 "class": "Container",
 "shadow": true,
 "bottom": 21,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "white block"
 },
 "paddingLeft": 0,
 "shadowBlurRadius": 10,
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "paddingRight": 0,
 "verticalAlign": "top",
 "id": "Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
 "left": 13,
 "backgroundOpacity": 0,
 "width": 256,
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "text": "Shivalay Bliss",
 "propagateClick": false,
 "minWidth": 1,
 "top": 2,
 "textShadowOpacity": 1,
 "textShadowColor": "#000000",
 "borderSize": 0,
 "class": "Label",
 "height": 51,
 "textShadowVerticalLength": 0,
 "shadow": false,
 "click": "this.openLink('http://www.shivalaybliss.com/', '_blank')",
 "textShadowHorizontalLength": 0,
 "fontSize": "35px",
 "textShadowBlurRadius": 10,
 "fontStyle": "normal",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold",
 "paddingLeft": 0
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "paddingRight": 0,
 "verticalAlign": "top",
 "id": "Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 309,
 "fontColor": "#000000",
 "minHeight": 1,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "text": "3BHK Sample House",
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "class": "Label",
 "height": 46,
 "shadow": false,
 "click": "this.openLink('http://www.shivalaybliss.com/', '_blank')",
 "bottom": 15,
 "fontSize": "25px",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "text 2"
 },
 "fontWeight": "bold",
 "paddingLeft": 0
},
{
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "children": [
  "this.Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
  "this.Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3"
 ],
 "id": "Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
 "left": "10%",
 "layout": "horizontal",
 "backgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "10%",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "top": "5%",
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": true,
 "bottom": "5%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "verticalAlign": "top",
 "paddingRight": 20,
 "children": [
  "this.IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0"
 ],
 "id": "Container_386C28AA_17CC_0B05_41B7_3334E854CA29",
 "left": "10%",
 "layout": "vertical",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "right": "10%",
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "5%",
 "contentOpaque": false,
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "shadow": false,
 "bottom": "80%",
 "gap": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "children": [
  "this.Container_3811E7E8_17DC_0505_4189_A53F22044B22",
  "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B"
 ],
 "id": "Container_3811F7E8_17DC_0505_417B_3406AEA143C9",
 "left": "15%",
 "layout": "vertical",
 "backgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "top": "7%",
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": true,
 "bottom": "7%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "children": [
  "this.Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
  "this.WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8"
 ],
 "id": "Container_2792F64D_17CC_071F_415E_8686768A06D3",
 "left": "15%",
 "layout": "vertical",
 "backgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "top": "7%",
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": true,
 "bottom": "7%",
 "backgroundColorDirection": "vertical",
 "gap": 4,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "children": [
  "this.Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
  "this.MapViewer"
 ],
 "id": "Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E",
 "left": "15%",
 "layout": "vertical",
 "backgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "top": "7%",
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": true,
 "bottom": "7%",
 "backgroundColorDirection": "vertical",
 "gap": 4,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "children": [
  "this.Container_20EC87A3_174C_050A_4198_F9830A58FD09",
  "this.Container_2F7D65D9_1744_0506_41B3_4FD17B01B645"
 ],
 "id": "Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076",
 "left": "15%",
 "layout": "vertical",
 "backgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "top": "7%",
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": true,
 "bottom": "7%",
 "backgroundColorDirection": "vertical",
 "gap": 6,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "children": [
  "this.Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
  "this.Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82"
 ],
 "id": "Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
 "left": "10%",
 "layout": "horizontal",
 "backgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "10%",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "top": "5%",
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadow": true,
 "bottom": "5%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "verticalAlign": "top",
 "paddingRight": 20,
 "children": [
  "this.IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6"
 ],
 "id": "Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27",
 "left": "10%",
 "layout": "vertical",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "right": "10%",
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "5%",
 "contentOpaque": false,
 "borderSize": 0,
 "class": "Container",
 "scrollBarMargin": 2,
 "shadow": false,
 "bottom": "80%",
 "gap": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_14F71F4B_06C8_B5CF_4186_20BBF570D7AF_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2F67FD8F_06CB_9547_4184_F019630B0181",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_14CE53D5_06C8_ACDB_4192_7A05DE5DFE2A_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2F64BD8F_06CB_9547_4188_187AE35B78BF",
 "frameDuration": 41
},
{
 "verticalAlign": "middle",
 "cursor": "hand",
 "fontFamily": "Oswald",
 "paddingRight": 0,
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "width": 169,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconURL": "skin/Button_03D37B27_0C7A_63B3_41A1_89572D8C8762.png",
 "minHeight": 1,
 "shadowOpacity": 0,
 "borderRadius": 0,
 "iconWidth": 0,
 "propagateClick": false,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "iconHeight": 0,
 "iconBeforeLabel": true,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "mode": "push",
 "class": "Button",
 "height": 40,
 "shadow": true,
 "rollOverShadow": false,
 "label": "Project Information ",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": "22px",
 "backgroundColorDirection": "vertical",
 "click": "this.openLink('http://www.shivalaybliss.com/', '_blank')",
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 0,
 "shadowBlurRadius": 15,
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "verticalAlign": "middle",
 "fontFamily": "Oswald",
 "paddingRight": 0,
 "data": {
  "name": "Button panorama list"
 },
 "textDecoration": "none",
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "width": 141,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconURL": "skin/Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD.png",
 "minHeight": 1,
 "borderRadius": 0,
 "fontColor": "#FFFFFF",
 "iconWidth": 64,
 "propagateClick": false,
 "borderColor": "#000000",
 "minWidth": 1,
 "iconHeight": 64,
 "iconBeforeLabel": true,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "class": "Button",
 "height": 61,
 "shadow": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "click": "this.openLink('https://maps.app.goo.gl/gRvQCWHTb4JKhHAS8', '_blank')",
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 0,
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "paddingRight": 0,
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "width": 126,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconURL": "skin/Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD.png",
 "minHeight": 1,
 "borderRadius": 0,
 "fontColor": "#FFFFFF",
 "iconWidth": 64,
 "propagateClick": false,
 "borderColor": "#000000",
 "minWidth": 1,
 "iconHeight": 64,
 "iconBeforeLabel": true,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "class": "Button",
 "height": 60,
 "shadow": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "cursor": "hand",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button location"
 },
 "shadowSpread": 1,
 "paddingLeft": 0
},
{
 "verticalAlign": "middle",
 "cursor": "hand",
 "fontFamily": "Oswald",
 "paddingRight": 0,
 "textDecoration": "none",
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "width": 113,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconURL": "skin/Button_1FE4B611_0C0A_256F_418E_EA27E66F8360.jpg",
 "minHeight": 1,
 "shadowOpacity": 0,
 "borderRadius": 0,
 "iconWidth": 64,
 "propagateClick": false,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "iconHeight": 64,
 "iconBeforeLabel": true,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "class": "Button",
 "height": 60,
 "shadow": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "rollOverFontColor": "#FFFFFF",
 "paddingLeft": 0,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button floorplan"
 },
 "shadowSpread": 1
},
{
 "verticalAlign": "middle",
 "cursor": "hand",
 "fontFamily": "Oswald",
 "paddingRight": 0,
 "textDecoration": "none",
 "id": "Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "width": 173,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconURL": "skin/Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5.jpg",
 "minHeight": 1,
 "shadowOpacity": 0,
 "borderRadius": 0,
 "iconWidth": 64,
 "propagateClick": false,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "iconHeight": 64,
 "iconBeforeLabel": true,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "class": "Button",
 "height": 61,
 "shadow": true,
 "label": " Brochure",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "rollOverFontColor": "#FFFFFF",
 "paddingLeft": 0,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button photoalbum"
 },
 "shadowSpread": 1
},
{
 "verticalAlign": "middle",
 "cursor": "hand",
 "fontFamily": "Oswald",
 "paddingRight": 0,
 "data": {
  "name": "Button contact"
 },
 "textDecoration": "none",
 "id": "Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "width": 107,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconURL": "skin/Button_33E0F47E_11C1_A20D_419F_BB809AD89259.png",
 "minHeight": 1,
 "shadowOpacity": 0,
 "borderRadius": 0,
 "iconWidth": 64,
 "propagateClick": false,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "iconHeight": 64,
 "iconBeforeLabel": true,
 "shadowHorizontalLength": 0,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "class": "Button",
 "height": 61,
 "shadow": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": 18,
 "backgroundColorDirection": "vertical",
 "click": "this.openLink('http://api.whatsapp.com/send?phone=+919809007474', '_blank')",
 "fontStyle": "italic",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 0,
 "shadowBlurRadius": 15,
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "toggle",
 "class": "IconButton",
 "height": 60,
 "shadow": false,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "visible": false,
 "maxWidth": 60,
 "data": {
  "name": "image button menu"
 },
 "paddingLeft": 0,
 "maxHeight": 60,
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "height": 58,
 "shadow": false,
 "click": "this.shareTwitter(window.location.href)",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingBottom": 0,
 "maxWidth": 58,
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingLeft": 0,
 "maxHeight": 58,
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "height": 58,
 "shadow": false,
 "click": "this.shareFacebook(window.location.href)",
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingBottom": 0,
 "maxWidth": 58,
 "data": {
  "name": "IconButton FB"
 },
 "paddingLeft": 0,
 "maxHeight": 58,
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "paddingRight": 0,
 "children": [
  "this.ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
  "this.Container_386D68AA_17CC_0B05_41B3_8E850505A16B"
 ],
 "id": "Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
 "layout": "absolute",
 "backgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "85%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "height": "100%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "paddingRight": 50,
 "children": [
  "this.Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
  "this.Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
  "this.Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF"
 ],
 "id": "Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3",
 "layout": "vertical",
 "backgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "width": "50%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 460,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "height": "100%",
 "paddingBottom": 20,
 "overflow": "visible",
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "paddingLeft": 50,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "middle",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0.jpg",
 "horizontalAlign": "center",
 "width": "25%",
 "minHeight": 40,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 40,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "height": "75%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_rollover.jpg",
 "pressedIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_pressed.jpg",
 "paddingBottom": 0,
 "maxWidth": 50,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "maxHeight": 50,
 "cursor": "hand"
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "children": [
  "this.HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
  "this.IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E"
 ],
 "id": "Container_3811E7E8_17DC_0505_4189_A53F22044B22",
 "layout": "absolute",
 "backgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "height": 80,
 "class": "Container",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "backgroundColor": [
  "#FF361B"
 ],
 "paddingBottom": 0,
 "overflow": "visible",
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "paddingLeft": 70,
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B",
 "scrollBarColor": "#FF361B",
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "itemLabelFontStyle": "normal",
 "itemMaxWidth": 1000,
 "minHeight": 1,
 "itemMode": "normal",
 "itemThumbnailOpacity": 1,
 "borderRadius": 5,
 "itemPaddingRight": 3,
 "rollOverItemLabelFontSize": 16,
 "itemLabelFontFamily": "Oswald Regular",
 "rollOverItemThumbnailShadowColor": "#FF361B",
 "itemBorderRadius": 0,
 "itemMaxHeight": 1000,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "minWidth": 1,
 "itemOpacity": 1,
 "height": "100%",
 "selectedItemLabelFontColor": "#C1280E",
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "shadow": false,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "width": "100%",
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 0,
 "paddingBottom": 70,
 "verticalAlign": "middle",
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "paddingRight": 70,
 "itemWidth": 220,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "itemMinHeight": 50,
 "selectedItemThumbnailShadow": true,
 "selectedItemLabelFontSize": 16,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#C1280E",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "propagateClick": false,
 "rollOverItemThumbnailShadow": true,
 "scrollBarMargin": 2,
 "playList": "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "borderSize": 0,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "class": "ThumbnailGrid",
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "itemThumbnailHeight": 125,
 "itemHeight": 160,
 "gap": 26,
 "itemBackgroundColorDirection": "vertical",
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "scrollBarWidth": 10,
 "data": {
  "name": "ThumbnailList5161"
 },
 "itemPaddingBottom": 3,
 "paddingTop": 30,
 "itemThumbnailWidth": 220
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "children": [
  "this.HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
  "this.IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14"
 ],
 "id": "Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
 "layout": "absolute",
 "backgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "height": 80,
 "class": "Container",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "backgroundColor": [
  "#FF361B"
 ],
 "paddingBottom": 0,
 "overflow": "visible",
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "paddingRight": 0,
 "id": "WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8",
 "backgroundOpacity": 1,
 "width": "100%",
 "minHeight": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14376.151861634273!2d-73.99351941263586!3d40.75732561349075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses!2ses!4v1542287427714\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "borderRadius": 0,
 "scrollEnabled": true,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "minWidth": 1,
 "insetBorder": false,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "WebFrame52781"
 },
 "paddingLeft": 0
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "children": [
  "this.HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
  "this.IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14"
 ],
 "id": "Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
 "layout": "absolute",
 "backgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "height": 80,
 "class": "Container",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "backgroundColor": [
  "#FF361B"
 ],
 "paddingBottom": 0,
 "overflow": "visible",
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "minHeight": 1,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "transitionMode": "blending",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipFontWeight": "normal",
 "toolTipShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "displayTooltipInTouchScreens": true,
 "class": "ViewerArea",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
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
 "vrPointerColor": "#FFFFFF",
 "paddingTop": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "children": [
  "this.HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
  "this.IconButton_20ECE7A3_174C_050A_41B4_AF609035102C"
 ],
 "id": "Container_20EC87A3_174C_050A_4198_F9830A58FD09",
 "layout": "absolute",
 "backgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "height": 80,
 "class": "Container",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "backgroundColor": [
  "#FF361B"
 ],
 "paddingBottom": 0,
 "overflow": "visible",
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "middle",
 "paddingRight": 0,
 "children": [
  "this.ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
  "this.Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0"
 ],
 "id": "Container_2F7D65D9_1744_0506_41B3_4FD17B01B645",
 "layout": "absolute",
 "backgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "height": "100%",
 "paddingBottom": 0,
 "overflow": "visible",
 "paddingTop": 0,
 "data": {
  "name": "-photoalbum"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "middle",
 "paddingRight": 0,
 "children": [
  "this.Image_182FD4E7_17B7_EF41_41AA_D495544C1972"
 ],
 "id": "Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
 "layout": "absolute",
 "backgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "85%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "height": "100%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "paddingRight": 50,
 "children": [
  "this.Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
  "this.Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
  "this.Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353"
 ],
 "id": "Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82",
 "layout": "vertical",
 "backgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "width": "50%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 460,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "height": "100%",
 "paddingBottom": 20,
 "overflow": "visible",
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "paddingLeft": 50,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "middle",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6.jpg",
 "horizontalAlign": "center",
 "width": "25%",
 "minHeight": 40,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 40,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "height": "75%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_rollover.jpg",
 "pressedIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_pressed.jpg",
 "paddingBottom": 0,
 "maxWidth": 50,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "maxHeight": 50,
 "cursor": "hand"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "right": 0,
 "minHeight": 1,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "transitionMode": "blending",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipFontWeight": "normal",
 "toolTipShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "bottom": 0,
 "class": "ViewerArea",
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "firstTransitionDuration": 0,
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
 "vrPointerColor": "#FFFFFF",
 "paddingTop": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "verticalAlign": "middle",
 "paddingRight": 0,
 "children": [
  "this.IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
  "this.Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
  "this.IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6"
 ],
 "id": "Container_386D68AA_17CC_0B05_41B3_8E850505A16B",
 "left": "0%",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "class": "Container",
 "height": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "Container arrows"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "id": "Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
 "layout": "horizontal",
 "backgroundOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "100%",
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "height": 60,
 "class": "Container",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "children": [
  "this.HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
  "this.Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4"
 ],
 "id": "Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
 "layout": "vertical",
 "backgroundOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "width": "100%",
 "minHeight": 520,
 "borderRadius": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 100,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "height": "100%",
 "paddingBottom": 30,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "id": "Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF",
 "layout": "horizontal",
 "backgroundOpacity": 0.3,
 "width": 370,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "class": "Container",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "paddingRight": 0,
 "id": "HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
 "left": "0%",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "77.115%",
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "borderSize": 0,
 "class": "HTMLText",
 "height": 80,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.64vh;font-family:'Oswald';\"><B>PANORAMA LIST/</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 17,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingLeft": 80,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E",
 "backgroundOpacity": 0,
 "width": 50,
 "horizontalAlign": "right",
 "right": 15,
 "iconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E.jpg",
 "minHeight": 40,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 40,
 "top": 15,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "height": 50,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_rollover.jpg",
 "pressedIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_pressed.jpg",
 "paddingBottom": 0,
 "maxWidth": 50,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "maxHeight": 50,
 "cursor": "hand"
},
{
 "paddingRight": 0,
 "id": "HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
 "left": "0%",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "77.115%",
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "borderSize": 0,
 "class": "HTMLText",
 "height": 80,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.64vh;font-family:'Oswald';\"><B>LOCATION/</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 17,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingLeft": 80,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14",
 "backgroundOpacity": 0,
 "width": 70,
 "horizontalAlign": "right",
 "right": 15,
 "iconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14.jpg",
 "minHeight": 40,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 40,
 "top": 15,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "height": 70,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_rollover.jpg",
 "pressedIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_pressed.jpg",
 "paddingBottom": 0,
 "maxWidth": 50,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "maxHeight": 50,
 "cursor": "hand"
},
{
 "paddingRight": 0,
 "id": "HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
 "left": "0%",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "77.115%",
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "borderSize": 0,
 "class": "HTMLText",
 "height": 80,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.64vh;font-family:'Oswald';\"><B>FLOORPLAN/</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 17,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingLeft": 80,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14",
 "backgroundOpacity": 0,
 "width": 70,
 "horizontalAlign": "right",
 "right": 15,
 "iconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14.jpg",
 "minHeight": 40,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 40,
 "top": 15,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "height": 70,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_rollover.jpg",
 "pressedIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_pressed.jpg",
 "paddingBottom": 0,
 "maxWidth": 50,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "maxHeight": 50,
 "cursor": "hand"
},
{
 "paddingRight": 0,
 "id": "HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
 "left": "0%",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "77.115%",
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "borderSize": 0,
 "class": "HTMLText",
 "height": 80,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.64vh;font-family:'Oswald';\"><B>PHOTOALBUM/</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 17,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingLeft": 80,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_20ECE7A3_174C_050A_41B4_AF609035102C",
 "backgroundOpacity": 0,
 "width": 50,
 "horizontalAlign": "right",
 "right": 15,
 "iconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C.jpg",
 "minHeight": 40,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 40,
 "top": 15,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "height": 50,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_rollover.jpg",
 "pressedIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_pressed.jpg",
 "paddingBottom": 0,
 "maxWidth": 50,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "maxHeight": 50,
 "cursor": "hand"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "right": 0,
 "minHeight": 1,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "shadow": false,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "transitionMode": "blending",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipFontWeight": "normal",
 "toolTipShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "bottom": 0,
 "class": "ViewerArea",
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "firstTransitionDuration": 0,
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
 "vrPointerColor": "#FFFFFF",
 "paddingTop": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum"
 }
},
{
 "verticalAlign": "middle",
 "paddingRight": 0,
 "children": [
  "this.IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
  "this.Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
  "this.IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33"
 ],
 "id": "Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0",
 "left": "0%",
 "layout": "horizontal",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "contentOpaque": false,
 "borderSize": 0,
 "class": "Container",
 "height": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "Container arrows"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "middle",
 "paddingRight": 0,
 "id": "Image_182FD4E7_17B7_EF41_41AA_D495544C1972",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "url": "skin/Image_182FD4E7_17B7_EF41_41AA_D495544C1972.jpg",
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "top": "0%",
 "borderSize": 0,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "maxWidth": 1341,
 "data": {
  "name": "Image5820"
 },
 "paddingLeft": 0,
 "maxHeight": 894,
 "paddingTop": 0,
 "scaleMode": "fit_outside"
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "id": "Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
 "layout": "horizontal",
 "backgroundOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "100%",
 "minHeight": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 1,
 "height": 50,
 "class": "Container",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "children": [
  "this.HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
  "this.Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
  "this.Button_1830D20E_17B1_6AC3_4198_688BED36E073"
 ],
 "id": "Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
 "layout": "vertical",
 "backgroundOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "width": "100%",
 "minHeight": 520,
 "borderRadius": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 100,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 25,
 "height": "100%",
 "paddingBottom": 30,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "-Container text"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "id": "Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353",
 "layout": "horizontal",
 "backgroundOpacity": 0.3,
 "width": 370,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 40,
 "class": "Container",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D.png",
 "horizontalAlign": "center",
 "width": "8%",
 "minHeight": 70,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 70,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "height": "8%",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_rollover.png",
 "pressedIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_pressed.png",
 "paddingBottom": 0,
 "maxWidth": 130,
 "data": {
  "name": "IconButton left arrow"
 },
 "paddingLeft": 0,
 "maxHeight": 130,
 "cursor": "hand"
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "id": "Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "width": "84%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "class": "Container",
 "height": "30%",
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "data": {
  "name": "Container separator"
 },
 "paddingLeft": 0,
 "paddingTop": 0
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6.png",
 "horizontalAlign": "center",
 "width": "8%",
 "minHeight": 70,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 70,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "height": "8%",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_rollover.png",
 "pressedIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_pressed.png",
 "paddingBottom": 0,
 "maxWidth": 130,
 "data": {
  "name": "IconButton right arrow"
 },
 "paddingLeft": 0,
 "maxHeight": 130,
 "cursor": "hand"
},
{
 "paddingRight": 10,
 "id": "HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
 "scrollBarColor": "#FF361B",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "shadow": false,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.73vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.66vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.76vh;font-family:'Oswald Regular';\">Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae bibendum.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.66vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.21vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.66vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.21vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.66vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarWidth": 10,
 "data": {
  "name": "HTMLText"
 },
 "paddingLeft": 10,
 "paddingTop": 0
},
{
 "verticalAlign": "middle",
 "fontFamily": "Bebas Neue Bold",
 "paddingRight": 0,
 "textDecoration": "none",
 "id": "Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4",
 "layout": "horizontal",
 "backgroundOpacity": 1,
 "width": 207,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "borderRadius": 0,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "propagateClick": false,
 "borderColor": "#000000",
 "minWidth": 1,
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "height": 59,
 "mode": "push",
 "class": "Button",
 "shadow": false,
 "label": "lorem ipsum",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": "3.7vh",
 "backgroundColorDirection": "vertical",
 "fontStyle": "normal",
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#FF361B"
 ],
 "paddingBottom": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button31015"
 },
 "shadowSpread": 1
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F.png",
 "horizontalAlign": "center",
 "width": "10%",
 "minHeight": 70,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 70,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "height": "10%",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_rollover.png",
 "pressedIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_pressed.png",
 "paddingBottom": 0,
 "maxWidth": 150,
 "data": {
  "name": "IconButton left arrow"
 },
 "paddingLeft": 0,
 "maxHeight": 150,
 "cursor": "hand"
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "id": "Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "width": "80%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "class": "Container",
 "height": "30%",
 "shadow": false,
 "gap": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "data": {
  "name": "Container separator"
 },
 "paddingLeft": 0,
 "paddingTop": 0
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingRight": 0,
 "id": "IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33",
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33.png",
 "horizontalAlign": "center",
 "width": "10%",
 "minHeight": 70,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 70,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "height": "10%",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_rollover.png",
 "pressedIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_pressed.png",
 "paddingBottom": 0,
 "maxWidth": 150,
 "data": {
  "name": "IconButton right arrow"
 },
 "paddingLeft": 0,
 "maxHeight": 150,
 "cursor": "hand"
},
{
 "paddingRight": 10,
 "id": "HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
 "scrollBarColor": "#FF361B",
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "62.894%",
 "shadow": false,
 "paddingBottom": 3,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:4.52vh;font-family:'Oswald';\"><B>______</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.73vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.66vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.76vh;font-family:'Oswald Regular';\"><B>Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.66vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.32vh;font-family:'Oswald';\"><B>www.loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.32vh;font-family:'Oswald';\"><B>info@loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.32vh;font-family:'Oswald';\"><B>Tlf.: +11 111 111 111</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.32vh;font-family:'Oswald';\"><B>Address line 1</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.32vh;font-family:'Oswald';\"><B>Address line 2</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "data": {
  "name": "HTMLText"
 },
 "paddingLeft": 10,
 "paddingTop": 0
},
{
 "verticalAlign": "top",
 "paddingRight": 0,
 "id": "Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
 "backgroundOpacity": 0,
 "width": "70%",
 "horizontalAlign": "left",
 "minHeight": 1,
 "url": "skin/Image_16B75461_1B87_4970_41B9_4F94F65FB1C1.jpg",
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "class": "Image",
 "height": "30%",
 "shadow": false,
 "paddingBottom": 0,
 "maxWidth": 211,
 "data": {
  "name": "Image logo"
 },
 "paddingLeft": 0,
 "maxHeight": 120,
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "verticalAlign": "middle",
 "fontFamily": "Oswald Regular",
 "paddingRight": 0,
 "data": {
  "name": "Button Contact"
 },
 "textDecoration": "none",
 "id": "Button_1830D20E_17B1_6AC3_4198_688BED36E073",
 "layout": "horizontal",
 "backgroundOpacity": 1,
 "width": 140,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "borderRadius": 0,
 "fontColor": "#FFFFFF",
 "iconWidth": 32,
 "propagateClick": false,
 "borderColor": "#000000",
 "minWidth": 1,
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "height": 59,
 "mode": "push",
 "class": "Button",
 "shadow": false,
 "label": "CONTACT",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": "2.83vh",
 "backgroundColorDirection": "vertical",
 "click": "this.openLink('http://www.loremipsum.com', '_blank')",
 "fontStyle": "normal",
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "backgroundColor": [
  "#FF361B"
 ],
 "paddingBottom": 0,
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist,this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "paddingRight": 0,
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
  "this.Button_2DA4ABE2_0749_9CF9_418B_A31A970D6044",
  "this.Button_28AA0A80_0758_BF39_4196_8C69D8E05DF4",
  "this.Button_28D528A8_0758_7B49_4173_9BD2261EE635",
  "this.Button_33A89FEE_0749_94C9_417D_0F5066009709",
  "this.Button_35D34F0B_0748_F54F_4186_C823BE1E2BA8",
  "this.ThumbnailList_1CD59727_1135_2675_41A3_0B89D4AE9514"
 ],
 "id": "rootPlayer",
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundPreloadEnabled": true,
 "minHeight": 20,
 "mobileMipmappingEnabled": false,
 "width": "100%",
 "borderRadius": 0,
 "vrPolyfillScale": 0.5,
 "propagateClick": false,
 "scripts": {
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "existsKey": function(key){  return key in window; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; }
 },
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 20,
 "downloadEnabled": false,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "class": "Player",
 "shadow": false,
 "defaultVRPointer": "laser",
 "gap": 10,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "desktopMipmappingEnabled": false,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "height": "100%"
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
