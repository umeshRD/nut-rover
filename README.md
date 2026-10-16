# NUT Rover

**Hazardous Environment Monitoring & Exploration Rover**

A compact, high-torque RC-controlled rover project for remote exploration and environmental monitoring. The project combines a robotic platform, camera-streaming firmware, and browser-based interfaces for remote operation and telemetry visualization.

![NUT Rover prototype](1748575686452.jfif)

## Project focus

- Remote operation in locations that are difficult to access directly.
- Live camera streaming for situational awareness.
- Environmental sensing and telemetry visualization as part of the rover concept.
- Integration of embedded firmware with web interfaces.

## Repository guide

| File or area | Purpose |
| --- | --- |
| [`CameraWebServer.ino`](CameraWebServer.ino) | Camera web-server sketch |
| [`app_httpd.cpp`](app_httpd.cpp) | HTTP-server implementation |
| [`camera_index.h`](camera_index.h) | Embedded camera interface content |
| [`camera_pins.h`](camera_pins.h) | Camera pin configuration |
| [`index.html`](index.html) | Web interface entry point |
| [`control.html`](control.html) | Control-interface page |
| [`scripts.js`](scripts.js) / [`styles.css`](styles.css) | Web scripts and styling |
| `*.jfif`, `*.png` | Project photographs and design assets |
| Additional HTML/TXT files | Development interface variants retained for reference |

## Getting started

### Camera firmware

1. Download the repository and open `CameraWebServer.ino` in Arduino IDE. If prompted, use a folder named `CameraWebServer` and keep its companion source/header files with it.
2. Install and select the ESP32 board package and the camera-capable board that match your hardware.
3. Review the camera model, pin configuration, and any network configuration in the sketch. Use your own local settings.
4. Compile and upload using the correct board and serial port.
5. Inspect serial output and test camera access on the intended local network.

### Web interface

Inspect `index.html` and `control.html` in a browser or through a local static web server. Review the endpoint addresses and control protocol before connecting the interface to hardware. Several development variants are retained, so confirm the intended interface for your build.

## Project status

This is a prototype and portfolio repository containing firmware, web interfaces, and visual project material. A complete bill of materials, wiring diagram, sensor integration guide, and validated operating procedure are not yet documented here. The project should not be treated as certified equipment for hazardous environments.

## Suggested next documentation

- Hardware bill of materials and wiring diagram.
- A single documented firmware/interface configuration.
- Sensor list, telemetry format, and calibration procedure.
- Bench-test results for controls, streaming, and communications.

## Author

[Umesh R.D.S](https://github.com/umeshRD) — Electrotechnology undergraduate, Wayamba University of Sri Lanka.
