function logMouseEvent(e, element) {
    element.innerText = "MouseEvent.altKey: " + e.altKey + "\n" +
        "MouseEvent.button: " + e.button + "\n" +
        "MouseEvent.buttons: " + e.buttons + "\n" +
        "MouseEvent.clientCoords: (" + e.clientX + ", " + e.clientY + ")" + "\n" +
        "MouseEvent.ctrlKey: " + e.ctrlKey + "\n" +
        "MouseEvent.layerCoords: (" + e.layerX + ", " + e.layerY + ")" + "\n" +
        "MouseEvent.metaKey: " + e.metaKey + "\n" +
        "MouseEvent.movementCoords: (" + e.movementX + ", " + e.movementY + ")" + "\n" +
        "MouseEvent.offsetCoords: (" + e.offsetX + ", " + e.offsetY + ")" + "\n" +
        "MouseEvent.pageCoords: (" + e.pageX + ", " + e.pageY + ")" + "\n" +
        "MouseEvent.relatedTarget: " + e.relatedTarget + "\n" +
        "MouseEvent.screenCoords: (" + e.screenX + ", " + e.screenY + ")" + "\n" +
        "MouseEvent.shiftKey: " + e.shiftKey + "\n" +
        "MouseEvent.webkitForce: " + e.webkitForce + "\n" +
        "MouseEvent.x: " + e.x + "\n" +
        "MouseEvent.y: " + e.y + "\n"
}

function logPointerEvent(e, element) {
    element.innerText = "PointerEvent.altitudeAngle: " + e.altitudeAngle + "\n" +
        "PointerEvent.azimuthAngle: " + e.azimuthAngle + "\n" +
        "PointerEvent.persistentDeviceId: " + e.persistentDeviceId + "\n" +
        "PointerEvent.pointerId: " + e.pointerId + "\n" +
        "PointerEvent.width: " + e.width + "\n" +
        "PointerEvent.height: " + e.height + "\n" +
        "PointerEvent.pressure: " + e.pressure + "\n" +
        "PointerEvent.tangentialPressure: " + e.tangentialPressure + "\n" +
        "PointerEvent.tiltX: " + e.tiltX + "\n" +
        "PointerEvent.tiltY: " + e.tiltY + "\n" +
        "PointerEvent.twist: " + e.twist + "\n" +
        "PointerEvent.pointerType: " + e.pointerType + "\n" +
        "PointerEvent.isPrimary: " + e.isPrimary + "\n"
}

function formatEventLog(element) {
    element.innerHTML = element.innerText.split("\n").map((line, j) => {
        let i = line.indexOf(":");
        if (i === -1) return line;
        let cls = j % 2 === 0 ? "property-value" : "property-value-alt";
        return "<span class='" + cls + "'><span class='property'>" + line.slice(0, i + 1) + "</span> <span class='value'>" + line.slice(i + 2) + "</span></span>";
    }).join("<br>")
}