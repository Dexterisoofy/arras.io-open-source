(() => {
    const startTime = new Date().getTime();
    function getTime() {
        return [new Date().getTime() - startTime, new Date().getTime()];
    };
    let events = {
        spawn: [],
        death: [],
        packets: [],
        fails: [],
        consoleEvents: []
    };
    let Console = {
        opened: false,
        lastOpened: -1,
        reset() {
            Console.opened = false;
        }
    };
    function addEvent(event, data) {
        if (!events[event]) return addEvent("fails", [event, data]);
        events[event].push({
            time: getTime(),
            data: data
        });
    };
    function checkConsole() {
        function color() {};
        let image = new Image();
        Object.defineProperty(image, "id", {
            get: function() {
                Console.opened = true;
                Console.lastOpened = getTime();
                addEvent("consoleEvents", {
                    type: "open"
                });
                return "";
            }
        });
        color.toString = function() {
            Console.opened = true;
            Console.lastOpened = getTime();
            addEvent("consoleEvents", {
                type: "open"
            });
            return "color:rgba(255, 255, 0, 255)";
        };
        setTimeout(console.log.bind(null, "%c%s", color, image));
    };
    window.addEventListener("resize", function(event) {
        Console.reset();
        checkConsole();
    });
    window.analytics = { Console, events, addEvent };
})();