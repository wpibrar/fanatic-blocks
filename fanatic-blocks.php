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

define( 'CL_URL', plugin_dir_url( __FILE__ ) );

/**
 * Registers a stylesheet.
 */
function wpdocs_register_plugin_styles() {

	if ( has_block( 'codloo-blocks/home-hero-section' ) ) {
		wp_register_style( 'home-hero-section', CL_URL . 'css/home-hero-section.css', array(), '1.0.0' );
	}

	if ( has_block( 'codloo-blocks/expertise-block' ) ) {
		wp_register_style( 'expertise-block', CL_URL . 'expertise-block.css', array(), '1.0.0' );
	}

}
add_action( 'enqueue_block_assets', 'wpdocs_register_plugin_styles' );

/**
 * Add category Codloo to the blocks editor.
 *
 * @param Categories $categories array of existing categories.
 * @param Post       $post object of currently loaded post.
 */
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

/**
 * Register blocks
 */
function create_block_starter_block_block_init() {
	register_block_type( __DIR__ . '/build/home-hero-section' );
	register_block_type( __DIR__ . '/build/expertise-block' );

}
add_action( 'init', 'create_block_starter_block_block_init' );
