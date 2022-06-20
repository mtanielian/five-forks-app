import RestaurantStack from './RestaurantStack'
import FavoritesStack from './FavoritesStack'
import RankingStack from './RankingStack'
import AccountStack from './AccountStack'
import SearchStack from './SearchStack'

export const routes = [
  {
    tab: 'RestaurantsTab',
    icon: 'compass-outline',
    title: 'Restaurants',
    component: RestaurantStack
  },
  {
    tab: 'FavoritesTab',
    icon: 'heart-outline',
    title: 'Favorites',
    component: FavoritesStack
  },
  {
    tab: 'RankginTab',
    icon: 'star-outline',
    title: 'Rankgin',
    component: RankingStack
  },
  {
    tab: 'SearchTab',
    icon: 'search-outline',
    title: 'Search',
    component: SearchStack
  },
  {
    tab: 'AccountTab',
    icon: 'home-outline',
    title: 'Account',
    component: AccountStack
  },
]