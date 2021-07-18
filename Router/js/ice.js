'use strict';

function makeIceTransport(t) {
    const iceTransport = new RTCIceTransport();
    t.add_cleanup(() => iceTransport.stop());
    return iceTransport;
}

function makeAndGatherTwoIceTransports(t) {
    const localTransport = makeIceTransport(t);
    const remoteTransport = makeIceTransport(t);
    localTransport.onicecandidate = e => {
        if (e.candidate) {
            remoteTransport.addRemoteCandidate(e.candidate);
        }
    };
    remoteTransport.onicecandidate = e => {
        if (e.candidate) {
            localTransport.addRemoteCandidate(e.candidate);
        }
    };
    localTransport.gather({});
    remoteTransport.gather({});
    return [localTransport, remoteTransport];
}

function makeGatherAndStartTwoIceTransports(t) {
    const [localTransport, remoteTransport] = makeAndGatherTwoIceTransports(t);
    localTransport.start(remoteTransport.getLocalParameters(), 'controlling');
    remoteTransport.start(localTransport.getLocalParameters(), 'controlled');
    return [localTransport, remoteTransport];
}
