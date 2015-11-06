<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #content and #page div elements.
 *
 * @package Tiny_Framework
 * @since Tiny Framework 1.0
 */
?>
	</div><!-- #content .site-content -->

	<?php tha_footer_before(); // custom action hook ?>

	<?php // Accessibility. Aria labelledby adds relationship between the footer and its heading. ?>

	<footer id="colophon" class="site-footer" role="contentinfo" aria-labelledby="footer-header" itemscope itemtype="http://schema.org/WPFooter">

		<?php tha_footer_top(); // custom action hook ?>

		<h2 class="screen-reader-text" id="footer-header"><?php esc_html_e( 'Footer Content', 'tinyframework' ); ?></h2>

		<div id="footer-widgets" class="widget-area three" itemscope itemtype="http://schema.org/WPSideBar">
		
			<?php
			// Three footer widget areas
			if ( ! is_404() ) : ?>

				<?php if ( is_active_sidebar( 'sidebar-4' ) ) : ?>
					<div id="footer-widget-left">
						<?php dynamic_sidebar( 'sidebar-4' ); ?>
					</div>
				<?php endif; ?>

				<?php if ( is_active_sidebar( 'sidebar-5' ) ) : ?>
					<div id="footer-widget-middle">
						<?php dynamic_sidebar( 'sidebar-5' ); ?>
					</div>
				<?php endif; ?>

				<?php if ( is_active_sidebar( 'sidebar-6' ) ) : ?>
					<div id="footer-widget-right">
						<?php dynamic_sidebar( 'sidebar-6' ); ?>
					</div>
				<?php endif; ?>
				
			<?php endif; // is_404() ?>

		</div><!-- #footer-widgets -->
	
		<div class="site-info">
		
			<div class="site-info-3">
				<?php // Tip85 - Add Social Media Menu. Read more: http://justintadlock.com/archives/2013/08/14/social-nav-menus-part-2 ?>
				<?php get_template_part( 'inc/menu', 'social' ); ?>		
			</div><!-- .site-info-3 -->

			<?php // Footer copyright widget area - use standard WordPress text widget with something like this: &copy; 2015 Your Name. All rights reserved ?>

			<?php if ( is_active_sidebar( 'sidebar-7' ) ) : ?>

			<div id="copyright-widget">
				<?php dynamic_sidebar( 'sidebar-7' ); ?> 
			</div>

			<?php endif; ?>
			
		</div><!-- .site-info -->
		

		<?php tha_footer_bottom(); // custom action hook ?>

	</footer><!-- .site-footer -->

	<?php tha_footer_after(); // custom action hook ?>

</div><!-- #page .site -->

<?php tha_body_bottom(); // custom action hook ?>
<?php wp_footer(); ?>

<!-- Happy coding! "Ut In Omnibus Glorificetur Deus" ~Saint Benedict -->
</body>
</html>