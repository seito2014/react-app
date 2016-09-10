export default function fit() {
    let setData = () => {
        $('body').css({
            height: $(window).height()
        });
    };
    setData();
    $(window).on('resize', setData);
}