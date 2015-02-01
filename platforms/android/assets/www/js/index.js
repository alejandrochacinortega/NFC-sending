var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        var success = function() { console.log("Success: NFC data sent to peer: ", record); };
        var failure = function(reason) { alert("Sharing failed " + reason); };

        var json = {
            'name': 'Omar',
            'age': 25,
            'country': 'Norway'
        };

        /*var mimeType = "text/json",
         payload = json,
         record = ndef.mimeMediaRecord(mimeType, '{"answer": 42, "name": "NITH", "city": "Oslo"}');*/

        var tnf = ndef.TNF_MIME_MEDIA,            // NDEF Type Name Format
            recordType = "text/json" // RTD
            payload = json,
            record,                   // NDEF record object
            message = [];             // NDEF Message to pass to writeTag()

        /*record = ndef.record(tnf, recordType, [], payload);*/

        console.log(record);


        nfc.share([ record ], success, failure);

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
