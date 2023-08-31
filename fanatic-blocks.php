<?php
/**
 * Plugin Name:       Fanatic Blocks
 * Description:       Custom blocks plugin for FanaticDevs
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            FamaticDevs
 *
 * @package           fanatic-blocks
 */

define ('CL_URL', plugin_dir_url(__FILE__));

/**
 * Registers a stylesheet.
 */
function wpdocs_register_plugin_styles() {

	if( has_block('codloo-blocks/home-hero-section') ){
		wp_register_style( 'home-hero-section', CL_URL.'css/home-hero-section.css', array('theme-layout') );
	}

	// if( has_block('codloo-blocks/home-about-section') ){
	// 	wp_register_style( 'home-hero-section', CL_URL.'css/home-hero-section.css' );
	// }

	// if( has_block('codloo-blocks/home-about-section') ){
	// 	wp_register_style( 'home-hero-section', CL_URL.'css/home-hero-section.css' );
	// }

}
add_action( 'enqueue_block_assets', 'wpdocs_register_plugin_styles' );


function my_plugin_block_categories( $categories, $post ) {

	$new_categories = array_merge(
		array(
			array(
				'slug' => 'codloo',
				'title' => __( 'Codloo', 'codloo_blocks' ),
			),
		),
		$categories,
	);

	return $new_categories;

}
add_filter( 'block_categories', 'my_plugin_block_categories', 10, 2 );

// echo __DIR__ . '/build/home-hero-section';
// exit();

function create_block_starter_block_block_init() {
	register_block_type( __DIR__ . '/build/home-hero-section' );
}
add_action( 'init', 'create_block_starter_block_block_init' );
