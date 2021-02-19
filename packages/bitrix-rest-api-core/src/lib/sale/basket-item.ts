/**
 * Basket item.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/basketitem/resource.php
 * @see https://dev.1c-bitrix.ru/rest_help/sale/basketitem/sale_basketitem_getFields.php
 */
import { BasketPropertyValue } from './basket-property-value';

export interface BasketItem {
  /**
   * Module.
   * Example: "catalog"
   */
  module: string;

  /**
   * Product code.
   * Example: "62"
   */
  productId: string;

  /**
   * Product ID.
   * Example: "171"
   */
  id: string;

  /**
   * Example: "bx_5fd9e56d895a1"
   */
  xmlId: string;

  /**
   * Site ID.
   * Example: "s1"
   */
  lid: string;

  /**
   * Products count.
   * Example: "2.0000"
   */
  quantity: number;

  /**
   * Product weight.
   * Example: "0.00"
   */
  weight: number;

  /**
   * Product price with all discounts and extra charges.
   * Example: "1614.1500", 514.09
   */
  price: number;

  /**
   * Is price custom.
   * Example: "N"
   */
  customPrice: boolean;

  /**
   * Raw product price without discounts and extra charges.
   * Example: "1899.0000", 604.81
   */
  basePrice: number;

  /**
   * Product price ID.
   * Example: "21"
   */
  productPriceId: string;

  /**
   * Product price type ID.
   * Example: "1"
   */
  priceTypeId: string;

  /**
   * Currency ISO code.
   * Example: "RUB"
   */
  currency: string;

  /**
   * Is barcode unique.
   * Example: "Y"
   */
  barcodeMulti: boolean;

  /**
   * Product name.
   * Example: "Штаны Жизнь в Абстракции"
   */
  name: string;

  /**
   * External catalog ID.
   * Example: "clothes_offers", "42475bb5-958f-40dc-a99f-9ad996a27af1"
   */
  catalogXmlId: string;

  /**
   * VAT rate.
   * Example: "0.0000", "0.2000"
   */
  vatRate: string;

  /**
   * Extra notes.
   * Example: "Розничная цена", "Розничная"
   */
  notes: string;

  /**
   * Discount.
   * Example: "284.8500", 90.72
   */
  discountPrice: number;

  /**
   * Name of the provider class.
   * Example: "\\Bitrix\\Catalog\\Product\\CatalogProvider"
   */
  productProviderClass: string;

  /**
   * Dimensions.
   * Example: "a:3:{s:5:\u0022WIDTH\u0022;N;s:6:\u0022HEIGHT\u0022;N;s:6:\u0022LENGTH\u0022;N;}"
   */
  dimensions: string;

  /**
   * Product type.
   * Example:
   */
  type?: unknown;

  /**
   * Parent category ID.
   * Example:
   */
  setParentId?: unknown;

  /**
   * URL of the product details page.
   * Example: "/catalog/tovary_dlya_detey/sredstva_dlya_kupaniya/detskaya_penka_2_v_1_dlya_mytya_volos_i_tela_s_pervykh_dney_zhizni_bez_slyez_kewpie_pompa_400_ml_12/"
   */
  detailPageUrl: string;

  /**
   * Measurement unit code.
   * Example: "796"
   */
  measureCode: string;

  /**
   * Measurement unit name.
   * Example: "Штука", "шт"
   */
  measureName: string;

  /**
   * Order ID.
   * Example: "81"
   */
  orderId: string;

  /**
   * External product ID.
   * Example: "207#209", "0858d92c-a990-4caf-bd46-93b6994d833c"
   */
  productXmlId: string;

  /**
   * Subscription to the product.
   * Example: "N"
   */
  subscribe: boolean;

  /**
   * Recommendation.
   * Example:
   */
  recommendation?: unknown;

  /**
   * Is VAT included into the price.
   * Example: "Y"
   */
  vatIncluded: boolean;

  /**
   * Sort number.
   * Example: "100"
   */
  sort: number;

  /**
   * Name of the discount.
   * Example:
   */
  discountName?: string;

  /**
   * Discount value.
   * Example:
   */
  discountValue?: unknown;

  /**
   * Discount coupon.
   * Example:
   */
  discountCoupon?: unknown;

  /**
   * Basket property values list.
   */
  properties: BasketPropertyValue[];

  /**
   * Example: "Y"
   */
  canBuy: boolean;

  /**
   * Example: "2020-12-16T13:46:05+03:00"
   */
  dateInsert: Date;

  /**
   * Example:
   */
  dateRefresh?: Date;

  /**
   * Example: "2020-12-16T13:50:03+03:00"
   */
  dateUpdate: Date;
}
