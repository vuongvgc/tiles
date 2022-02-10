var APP_DATA = {
  "scenes": [
    {
      "id": "0-outdoor",
      "name": "outdoor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.5168859707829352,
        "pitch": 0.029405978226197504,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.5168859707829352,
          "pitch": 0.029405978226197504,
          "rotation": 0,
          "target": "2-indoor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-center",
      "name": "center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.508690340424959,
        "pitch": -0.0004630404239112096,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "2-indoor",
      "name": "indoor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.5880417018257802,
        "pitch": -0.029407671178885764,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.6741328347143583,
          "pitch": 0.10049320287935082,
          "rotation": 0,
          "target": "1-center"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
