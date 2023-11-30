import { useQuery } from "@tanstack/react-query";

import queries from "@/services/queries";
import { getSliderItems } from "@/services/slider.service";
import urls from "@/services/urls";

function useSlider() {
  const { data, isFetching } = useQuery({
    queryKey: [queries.SLIDER_ITEMS],
    queryFn: () => getSliderItems(urls.HOME_SLIDER),
  });
  return { data, isFetching };
}

export default useSlider;
